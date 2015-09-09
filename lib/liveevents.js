/**
 * Live Events API Calls
 * @see http://support.uplynk.com/doc_integration_apis_liveevents.html
 */
module.exports = function(api) {
  return {
    /**
     * Retrieves a specific live event.
     * @param  {Object}   opts { id: '', external_id: '', ids: '',  external_ids: ''}
     * @param  {Function} cb   callback
     */
    get: function(opts, cb) {
      return api('/api2/liveevents/get', opts, cb);
    },

    /**
     * Modifies an live event.
     * @param  {Object}   { id: '', external_id: '', desc: '',  meta: '' (JSONString)}
     */
    update: function (opts, cb) {
      return api('/api2/liveevents/update', opts, cb);
    },

    /**
     * Modifies an live event.
     * @param  {Object}   { search: {string}, limit: {integer}, skip: {integer},  order: {string}}
     * @param  {Function} cb   callback
     */
    list: function (opts, cb) {
      return api('/api2/liveevents/list', opts, cb);
    },

    /**
     * Deletes one or more live event.
     * @param  {Object}   opts Object of this form: { ids: [], external_ids: [] }
     * @param  {Function} cb   callback
     */
    delete: function (opts, cb) {
      return api('/api2/liveevents/delete', opts, cb);
    }
  }
}