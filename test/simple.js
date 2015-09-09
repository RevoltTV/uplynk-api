var assert = require('assert');
var Uplynk = require('../lib');
var api;

before(function() {
  api = Uplynk({
    ownerGUID: '',
    apiKey: ''
  });
});

describe('assets', function() {
  it('should get a single asset', function(done) {
    api.asset.get({ external_id: '' }, function(err, resp) {
      if (!err && resp.body.asset) {
        done();
      }
    });
  });

    it('should get a list of changes', function(done) {
    api.asset.changes({ start: 1440280538000, end: 1440450340000 }, function(err, resp) {
      if (!err && resp.body) {
        done();
      }
    });
  });
});

describe('cloudslicer', function(){
  it('should list slicer jobs', function (done) {
    api.cloudslicer.list({ limit: 10 }, function(err, resp) {
      if (err) {
        throw err;
      }

      if (!err && resp.body) {
        done();
      }
    });
  });
});

describe('channel', function(){
    it('should list channels', function(done) {
    api.channel.list({ limit: 10 }, function(err, resp) {
      if (err) {
        throw err;
      }

      if (!err && resp.body) {
        done();
      }
    });
  });
});