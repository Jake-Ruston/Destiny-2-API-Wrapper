const { TOKEN } = require('./config');
const destiny = require('.');
const client = new destiny.Client(TOKEN);

client.getProfile('PushyParachute4', '1').then(data => {
  console.log(data);
});

process.on('unhandledRejection', console.error);
