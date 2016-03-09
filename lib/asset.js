/**
 * Asset API Calls
 * @see http://support.uplynk.com/doc_integration_apis_asset.html
 */
module.exports = function(api) {
  return {
    /**
     * Retrieves a specific asset from your library. 
     * @param  {Object}   opts { id: '', external_id: '', ids: '',  external_ids: ''}
     * @param  {Function} cb   callback
     */
    get: function(opts, cb) {
      return api('/api2/asset/get', opts, cb);
    },

    /**
     * Modifies an asset in your library.
     * @param  {Object}   { id: '', external_id: '', desc: '',  meta: '' (JSONString)}
     */
    update: function (opts, cb) {
      return api('/api2/asset/update', opts, cb);
    },

    /**
     * Lists or searches for assets.
     * @param  {Object}   { [search: {string}], [limit: {integer}], [skip: {integer}],  [order: {string}]}
     * @param  {Function} cb   callback
     */
    list: function (opts, cb) {
      return api('/api2/asset/list', opts, cb);
    },

    /**
     * Deletes one or more assets from your library.
     * @param  {Object}   opts Object of this form: { ids: [], external_ids: [] }
     * @param  {Function} cb   callback
     */
    delete: function (opts, cb) {
      return api('/api2/asset/delete', opts, cb);
    },

    /**
     * Returns a list of changes that have been made to assets from a certain point in time onward.
     * @param  {Object}   opts { start: {integer}}
     * @param  {Function} cb   callback
     */
    changes: function (opts, cb) {
      return api('/api2/asset/changes', opts, cb);
    },

     /**
     * Returns a base64 representation of the specified frame from the highest bitrate variant of the specified asset.
     * @param  {Object}   opts { id: {integer}, ts: {integer / string}}
     * @param  {Function} cb   callback
     */
    changes: function (opts, cb) {
      return api('/api2/asset/getframe', opts, cb);
    },

    /**
     * Return a list of base64 representations of the frames in the range from `start` to `stop` from the lowest bitrate variant of the asset. 
     * The time range specified by start-stop may not be greater than 1 second. 
     * If the optional `stop` parameter is omitted, will return a 1-second range, beginning at `start`.
     * @param  {Object}   opts { id: {integer}, start {integer / string} [, stop {integer / string}]}
     * @param  {Function} cb   callback
     */
    changes: function (opts, cb) {
      return api('/api2/asset/getthumbs', opts, cb);
    },

  }
}