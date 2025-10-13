/**
 * Module dependencies.
 */
var Server = require('./server')
  , parsers = require('./parsers')

/**
 * Export default middleware.
 *
 * @api public
 */
var srv = new Server();
srv.parser(/multipart/i, parsers.formaline);
srv.parser(/octet-stream/i, parsers.octetstream);

exports = module.exports = srv.upload.bind(srv);

/**
 * Expose constructors.
 */
exports.Server = Server;
