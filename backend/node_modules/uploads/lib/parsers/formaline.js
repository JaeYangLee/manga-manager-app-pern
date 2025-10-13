/**
 * Module dependencies.
 */
var formaline = require('formaline').Formaline;

/**
 * Create Formaline parser.
 *
 * This parser uses Formaline v2.x to process multipart file uploads in a
 * stream-based manner.
 *
 * Formaline conforms to the exposed interface, so no translation is
 * necessary.
 *
 * @return {Function}
 * @api public
 */
module.exports = function(req, options) {
  options = options || {};
  options.path = options.path || options.tmpDir || null;
  
  var form = formaline.create(req, options);
  if (!form) { return null; }
  
  // propagate form errors to the current file stream
  var cf;
  form.on('file', function(key, file) {
    cf = file;
    file.once('end', function() {
      cf = null;
    });
    file.once('error', function(err) {
      cf = null;
    });
  });
  form.on('error', function(err) {
    if (cf) { cf.emit('error', err); }
  });
  
  return form;
}
