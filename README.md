## Uplynk API Integration for Node
Simple API wrapper for Uplynk's API. For more detailed documentation check their official [API docs](http://support.uplynk.com/doc_integration_apis.html#s5).


```
npm install uplynk-api
```

```
var uplynk = require('uplynk-api');
var api = uplynk({
    ownerGUID: '<USER GUID>',
    apiKey: '<API KEY>'
});

api.asset.get({id: 'SOMEID'}, function (err, resp) {
  console.log(resp.body);
});

```
