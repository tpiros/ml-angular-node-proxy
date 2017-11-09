var httpProxy = require('http-proxy');

var proxy = httpProxy.createServer({
  target:'http://localhost:3000'
}).listen(5555);

proxy.on('proxyRes', function(proxyReq, req, res, options) {
  // add the CORS header to the response
  res.setHeader('Access-Control-Allow-Origin', '*');
});