# Destiny 2
A simple to use module for interacting with the Destiny 2 API.

## Install
```
$ npm install destiny2
```
## How to
```js
// require the package
const { Client } = require('destiny2');
const client = new Client();

client.getProfile('PushyParachute4', '1').then(data => console.log(data));
```
- `display name` is required and must be a string.
- 'platform' Possible platforms are `1`: xbox, `2`: psn, `3`: pc
