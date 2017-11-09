var request = require('request');
var express = require('express');
var app = express();
var router = express.Router();

router.route('/*').get(function(req, res) {
  var url = req.url;
  const marklogicRESTAPI = 'http://localhost:8000'
  // http://localhost:8000/v1/documents
  console.log(`${marklogicRESTAPI}${url}`);
  request(`${marklogicRESTAPI}${url}`, {
    auth: {
      user: 'admin',
      pass: 'admin',
      sendImmediately: false
    }
  }, (error, response, body) => res.end(body));
});

app.use('/', router);
app.listen(3000);