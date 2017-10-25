const destiny = require('.');
const client = new destiny.Client('c060f847214f4a7eb4d8db139dabd7f4');

client.getProfile('PushyParachute4', '1').then(data => {
  console.log(data);
});
