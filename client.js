//jshint esversion: 6

console.log('anyone there?');

const PORT = process.env.PORT || 8080;
const address = '0.0.0.0';
const net = require('net');

const server = new net.Socket();
server.connect(PORT, () => {
  console.log('Connected to Server');

  process.stdin.pipe(server);

  server.pipe(process.stdout);
});

server.on('end', () => {
  console.log('Disconnected from Server');
});