/**
 * Slicer API Calls
 * @see http://support.uplynk.com/doc_integration_apis_slicer.html
 */
module.exports = function (api) {
  return {
    /**
     * Returns the last known status of one or more slicers.
     * @param  {Obhect}   opts required - { slicer_ids: ['id1'. 'id2'] }
     */
    status: function (opts, cb) {
      if (!opts.slicer_ids) {
        return cb(new Error('`slicer_ids` is required for this call.'));
      }

      api('/api2/slicer/status', opts, cb);
    },

    /**
     * Gets the current Slicing Schedule for a slicer.
     */
    get: function (opts, cb) {
      if (!opts.slicer_id) {
        return cb(new Error('`slicer_id` is required for this call.'));
      }

      api('/api2/slicer/schedule/get', opts, cb);
    },

    /**
     * Updates the Slicing Schedule for a slicer.
     */
    update: function (opts, cb) {
      if (!opts.slicer_id) {
        return cb(new Error('`slicer_id` is required for this call.'));
      }

      if (!opts.utc_offset) {
        return cb(new Error('`utc_offset` is required for this call.'));
      }

      if (!opts.schedule) {
        return cb(new Error('`schedule` is required for this call.'));
      }

      api('/api2/slicer/schedule/update', opts, cb);
    },
  };
};