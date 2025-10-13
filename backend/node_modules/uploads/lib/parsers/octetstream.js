/**
 * Module dependencies.
 */
var EventEmitter = require('events').EventEmitter
  , Stream = require('stream')
  , cryptostream = require('formaline/lib/cryptostream')
  , util = require('util')

// TODO: Extract cryptostream from formaline into a separate module.

/**
 * Create octet-stream parser.
 *
 * This parser handles file uploads from clients that POST raw octet streams.
 *
 * This parser supports the `X-File-Name` header convention used for Ajax-based
 * uploads.  For details on this convention, refer to:
 *   http://blog.new-bamboo.co.uk/2010/07/30/html5-powered-ajax-file-uploads
 *
 * The exposed interface represents the "greatest common denominator", that of
 * multipart file uploads, even though much of that interface is not utilized by
 * this parser.  In particular, only a single file can be uploaded and additional
 * form data cannot be present.
 *
 * @return {Function}
 * @api public
 */
module.exports = function(req, options) {
  options = options || {};
  options.hashes = options.hashes || [];
  
  var form = new Form(req, options);
  return form;
}


function Form(req, options) {
  EventEmitter.call(this);
  
  var self = this
    , filename = req.headers['x-file-name']
    , type = req.headers['content-type']
  
  var file = new File(req, { filename: filename, type: type });
  if (options.hashes.length) {
    startHashing(file, options.hashes);
  }
  
  req.on('data', function(data) {
    file.size += data.length;
    file.lastModifiedDate = new Date();
    file.emit('data', data);
  });
  req.on('end', function() {
    file.emit('end');
    self.emit('end');
  });
  req.on('error', function(err) {
    file.emit('error', err);
    self.emit('error', err);
  });
  
  req.pause();
  process.nextTick(function() {
    self.emit('file', undefined, file);
    req.resume();
  });
}

util.inherits(Form, EventEmitter);


function File(req, options) {
  Stream.call(this);
  
  this.name = options.filename;
  this.type = options.type;
  this.size = 0;
  this.lastModifiedDate = null;


  Object.defineProperty(this, '_req', {
      value: req
    , enumerable: false
  });

  // Node.js Stream API
  Object.defineProperty(this, 'readable', {
      value: true
    , enumerable: false
  });
  Object.defineProperty(this, 'writable', {
      value: false
    , enumerable: false
  });
}

util.inherits(File, Stream);

File.prototype.pause = function () {
  this._req.pause();
};

File.prototype.resume = function () {
  this._req.resume();
};


function startHashing(file, hashes) {
  hashes.forEach(function(algo) {
    var cs = cryptostream.create(algo);
    file.pipe(cs);
    cs.on('end', function () {
      file[algo] = cs.digest('hex');
    });
  });
}
