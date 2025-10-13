/**
 * Module dependencies.
 */
var parsers = require('../parsers')
  , _limit = require('connect').limit
  , qs = require('qs')


/**
 * Upload:
 *
 * Handle streaming file uploads.
 *
 * Handling Files:
 *
 *  The `handler` passed will be invoked to process file uploads.  Note that the
 *  handler may be invoked multiple times if processing form data containing
 *  multiple files.  The signature of handler can take a variety of forms, where
 *  greater arity allows access to finer-grained details about the file and/or
 *  form.
 *
 *    function(file, cb);
 *    function(file, body, cb);
 *    function(file, key, body, cb);
 *    function(file, key, i, body, cb);
 *    function(file, key, i, body, req, cb);
 *
 *    `file`    file being uploaded, implementing the Readable Stream interface
 *    `body`    non-file fields in the request entity body, if any
 *    `key`     name of form field containing file, if submitted via HTML form
 *    `i`       index of file, incremented for each file in request (0-based)
 *    `req`     HTTP request in which file is being transported
 *
 *  The `file` object passed to `handler` implements the [Readable Stream](http://nodejs.org/api/stream.html#stream_readable_stream)
 *  interface.  It also contains informational properties about the file,
 *  conforming to the W3C [File API](http://www.w3.org/TR/FileAPI/).
 *
 *    `name`              name of the file, without path information
 *    `type`              MIME type of the file, if known
 *    `size`              number of bytes received
 *    `lastModifiedDate`  time this file last received bytes
 *
 *  
 *
 * Configuration:
 *
 *  The options passed are passed through to parser constructors.  For example,
 *  if you want which to calculate hashes while using [formaline](https://github.com/rootslab/formaline),
 *  do the following:
 *
 *     app.post('/upload', upload({ hashes: ["md5", "sha1"] }, ...));
 *
 * Options:
 *
 *   - `limit`  byte limit defaulting to none
 *   - `defer`  defers processing and exposes the form object as `req.form`.
 *              `next()` is called without waiting for the form's "end" event.
 *              This option is useful if you need to bind to the "progress" event, for example.
 *
 * @param {Object} options
 * @param {Function} handler
 * @return {Function}
 * @api public
 */
exports = module.exports = function(options, handler) {
  if (typeof options == 'function') {
    handler = options;
    options = {};
  }
  options = options || {};

  if (!handler) throw new Error('upload middleware requires a stream handler');

  var server = this;
  var limit = options.limit
    ? _limit(options.limit)
    : noop;

  return function upload(req, res, next) {
    limit(req, res, function(err) {
      if (err) return next(err);

      var form = server.factory(req, options)
        , data = {}
        , fc = 0
        , done;

      if (!form) {
        var err = new Error('Unsupported media type');
        err.status = 415;
        return next(err);
      }

      form.on('field', function(name, val) {
        if (Array.isArray(data[name])) {
          data[name].push(val);
        } else if (data[name]) {
          data[name] = [data[name], val];
        } else {
          data[name] = val;
        }
      });

      form.on('file', function(key, file) {
        var body;

        try {
          body = qs.parse(data);
        } catch (err) {
          form.emit('error', err);
          return;
        }


        function handled(err) {
          if (done) return;
          if (err) {
            done = true;
            if (!options.defer) {
              err.status = 500;
              return next(err);
            } else {
              form.emit('processingError', err);
              return;
            }
          }
        }

        var arity = handler.length;
        if (arity == 6) {
          handler(file, key, fc, body, req, handled);
        } else if (arity == 5) {
          handler(file, key, fc, body, handled);
        } else if (arity == 4) {
          handler(file, key, body, handled);
        } else if (arity == 3) {
          handler(file, body, handled);
        } else { // arity == 2
          handler(file, handled);
        }
        fc++;
      });

      form.on('end', function() {
        if (done) return;
        if (!options.defer) next();
      });

      form.on('error', function(err) {
        done = true;
        if (!options.defer) {
          err.status = 400;
          next(err);
        }
      });


      if (options.defer) {
        req.form = form;
        next();
      }
    });
  }
}


/**
 * noop middleware
 */
function noop(req, res, next) {
  next();
}
