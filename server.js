const http = require('http');

// Use environment variable for port or default to 3000
const port = process.env.PORT || 3000;

// Listen on all network interfaces (0.0.0.0)
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
