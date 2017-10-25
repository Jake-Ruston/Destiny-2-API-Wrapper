const destiny = require('.');
const client = new destiny.Client('');

client.getProfile('PushyParachute4', '1').then(data => {
  console.log(data);
});
