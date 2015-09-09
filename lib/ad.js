module.exports = function (api) {
  return {
    get: function(opts, cb) {
      return api('/api2/ad/external/get', opts, cb);
    }
  };
};