/**
 * Module dependencies.
 */
var upload = require('./middleware/upload');


/**
 * `Server` constructor.
 *
 * A default `Server` is configured, and its `upload` middleware is exported via
 * the module.   It is not necessary to create other `Server` instances, unless
 * parser customization is required.
 *
 * @api public
 */
function Server() {
  this._parsers = [];
}

/**
 * Middleware that handles file uploads.
 *
 * @param {Object} options
 * @param {Function} handler
 * @return {Function} middleware
 * @api public
 */
Server.prototype.upload = function(options, handler) {
  return upload.bind(this)(options, handler);
}

/**
 * Register a parser `fn` for content `type`.
 *
 * @param {String|RegExp} type
 * @param {Function} fn
 * @api public
 */
Server.prototype.parser = function(type, fn) {
  this._parsers.push({ regexp: type, fn: fn });
}

/**
 * Create a parser to process `req`.
 *
 * @param {ServerRequest} req
 * @param {Object} options
 * @api public
 */
Server.prototype.factory = function(req, options) {
  var parsers = this._parsers
    , parser;
  for (var i = 0, len = parsers.length; i < len; i++) {
    parser = parsers[i];
    if (req.headers['content-type'].match(parser.regexp)) {
      return parser.fn(req, options);
    }
  }
  return null;
}


/**
 * Expose `Server`.
 */
module.exports = Server;
