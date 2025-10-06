const http = require('node:http');

const hostname = '0.0.0.0'; // Cho phép truy cập từ mọi địa chỉ (Render yêu cầu)
const port = process.env.PORT || 3000; // Render cấp PORT động, local fallback 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Render! 🌍\n');
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});