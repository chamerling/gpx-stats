var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000
  , root = require('path').normalize(__dirname)

app.get('/', function(req, res) {
  res.send('Nothing here...');
});

app.get('/stats', function(req, res) {
  console.log(req.query.url);
  res.send('OK')
});

app.listen(port, function(err) {
  console.log('started');
})