var path = require('path');
var express = require('express');
const cors = require('cors');

var app = express();

var staticPath = path.join(__dirname, '/build');

app.use(express.static(staticPath));

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

var PORT = process.env.PORT ? process.env.PORT : 3000;

app.listen(PORT, function() {
  console.log('listening on 3000');
});
