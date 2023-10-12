const http = require("http");
const httpProxy = require("http-proxy");

// Define the target server you want to proxy to
const target = "https://thejellybee.com/"; // Replace with the target server's URL

// Create a proxy server
const proxy = httpProxy.createProxyServer({ secure: false });

// Create an HTTP server to handle the proxy
const server = http.createServer((req, res) => {
  // Forward the request to the target server
  proxy.web(req, res, { target });
});

// Listen on a specific port (e.g., 3000)
const port = 3000;
server.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
