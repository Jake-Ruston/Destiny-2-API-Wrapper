const { TOKEN } = requrie('config');
const destiny = require('.');
const client = new destiny.Client(TOKEN);

client.getProfile('PushyParachute4', '1').then(data => {
  console.log(data);
});
