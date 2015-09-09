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
    }
  };
};