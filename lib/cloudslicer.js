/**
 * Cloud slicer API Calls
 * @see http://support.uplynk.com/doc_integration_apis_cloudslicer.html
 */
module.exports = function (api) {
  return {
    get: function (opts, cb) {
      return api('/api2/cloudslicer/jobs/get', opts, cb);
    },

    create: function (opts, cb) {
      return api('/api2/cloudslicer/jobs/create', opts, cb);
    },

    /**
     * Lists or searches for channels in your account.
     * @param  {Object}   opts 
     */
    list: function (opts, cb) {
      if (typeof opts === 'function') {
        cb = opts;
        opts = {};
      }
      return api('/api2/cloudslicer/jobs/list', opts, cb);
    },

    delete: function (opts, cb) {
      return api('/api2/cloudslicer/jobs/delete', opts, cb);
    },

    /**
     * Cancels a queued or currently running cloudslicer job. 
     */
    cancel: function (opts, cb) {
      return api('/api2/cloudslicer/jobs/cancel', opts, cb);
    },

    /**
     * Creates a job to export the specified asset to a downloadable MP4. 
     */
    create_export: function (opts, cb) {
      return api('/api2/cloudslicer/jobs/create_export', opts, cb);
    },

    /**
     * Quick Clip jobs allow you to quickly create simple clips from your Uplynk assets. 
     * Unlike the clipping tool, the asset is copied. 
     * So you cannot add overlays, fades, bumper assets, add or remove ad breaks, add or remove alternate audio tracks or captions, etc. 
     * It's much more limited in it's capabilities as a tradeoff for speed. 
     * @param  {Object}   { asset: {string}, source: {"trim": {integer:integer}}, args: {"beam_id": {string}} }
     * @param  {Function} cb   callback
     */
    create_export: function (opts, cb) {
      return api('/api2/cloudslicer/jobs/quickclip', opts, cb);
    }
  };
};