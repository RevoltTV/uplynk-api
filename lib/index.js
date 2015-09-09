var request = require('superagent');
var zlib = require('zlib');
var _ = require('lodash');
var crypto = require('crypto');

var config = {
  url: 'http://services.uplynk.com',
  ownerGUID: '',
  apiKey: ''
};

var Uplynk = function (opts) {
  config = _.defaults(opts, config);

  var encodeMessage = function (params, cb) {
    params._timestamp = Math.floor((new Date()).getTime() / 1000); // in seconds
    params._owner = config.ownerGUID;
    var json = JSON.stringify(params);
    var msg = new Buffer(json);
    zlib.deflate(msg, { level: 9 }, function(err, buffer) {
      if (!err) {
        return cb( buffer.toString('base64') );
      }      
    }); 
  };

  var sign = function (msg) {
    return encodeURIComponent(crypto.createHmac('sha256', config.apiKey).update(msg).digest('hex'));
  };

  var api = function (path, params, cb) {
    var url = config.url + path;
    encodeMessage(params, function (msg) {
      var q = { msg: msg, sig: sign(msg) };
      return request
        .get(url)
        .query(q)
        .set('Accept', 'application/json')
        .end(cb);
    });
  };

  return {
    asset: require('./asset')(api),
    channel: require('./channel')(api),
    cloudslicer: require('./cloudslicer')(api),
    slicer: require('./slicer')(api)
  }
};

module.exports = Uplynk;