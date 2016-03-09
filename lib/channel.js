/**
 * Channel API Calls
 * @see http://support.uplynk.com/doc_integration_apis_channel.html
 */
module.exports = function (api) {
  return {
    /**
     * Retrieves information about a specific channel or channels in your account.
     * @param  {Object}   opts { ids: [], external_ids: [] }
     * @param  {Function} cb  
     */
    get: function (opts, cb) {
      return api('/api2/channel/get', opts, cb);
    },

    update: function (opts, cb) {
      return api('/api2/channel/update', opts, cb);
    },

    create: function (opts, cb) {
      return api('/api2/channel/create', opts, cb);
    },

    /**
     * Lists or searches for channels in your account.
     * @param  {Object}   opts 
     */
    list: function (opts, cb) {
      return api('/api2/channel/list', opts, cb);
    },

    delete: function (opts, cb) {
      return api('/api2/channel/delete', opts, cb);
    },

    /**
     * Lists assets for a live channel.
     * @param  {Object}   opts {id:{string} [, external_id:{string}], [start:{int}], [stop:{int}]}
     */
    assets: function (opts, cb) {
      return api('/api2/channel/assets', opts, cb);
    },

     /**
     * Sets or clears the override slicer ID for one or more live channels.
     * @param  {Object}   opts {channels:{array} [, override_slicer_id:{string}], [override_slicer_owner:{string}]}
     */
    override: function (opts, cb) {
      return api('/api2/channel/override', opts, cb);
    },

     /**
     * Returns the current channel schedule for the specified channel
     * @param  {Object}   opts { id:{string} [, external_id:{string}] }
     */
    schedule_get: function (opts, cb) {
      return api('/api2/channel/schedule/get', opts, cb);
    },

     /**
     * Updates the channel schedule for the specified channel, overwriting existing entries
     * @param  {Object}   opts { id:{string} [, external_id:{string}], schedule:{array} }
     */
    schedule_update: function (opts, cb) {
      return api('/api2/channel/schedule/update', opts, cb);
    }
  };
};