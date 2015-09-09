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
    }
  };
};