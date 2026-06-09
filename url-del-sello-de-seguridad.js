const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('casahotel.key'),
  cert: fs.readFileSync('casahotel.net')
};

const server = tls.createServer(options, (socket) => {
  console.log('Cliente conectado');
});
