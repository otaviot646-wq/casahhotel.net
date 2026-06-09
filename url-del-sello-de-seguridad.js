const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

const server = tls.createServer(options, (socket) => {
  console.log('Cliente conectado');
});
