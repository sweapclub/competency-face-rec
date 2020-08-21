const express = require('express');
const path = require('path');
var cors = require('cors');
// const bodyParser = require("body-parser");

var whitelist = ['http://localhost:8080', 'http://localhost:3000/'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {origin: true}; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {origin: false}; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptionsDelegate));

app.use('/api', require('./api'));

// if (process.env.NODE_ENV === 'production') {
// Serve any static files
app.use(express.static(path.join(__dirname, 'deploy')));
app.use('/db/img', express.static(path.join(__dirname, 'db/img')));

// // Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'deploy', 'index.html'));
});
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
