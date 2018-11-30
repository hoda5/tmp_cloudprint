var express = require('express');
var http = require('http');
var cors = require('cors');
var expressvar = express();

expressvar.use(function (req, res, next) {
    var origin = req.header('origin') || "localhost:8282"
    res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, origin, x-requested-with');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Origin', "https://www.google.com");
    next();
});

// expressvar.use(cors());
expressvar.use(express.static('./public'));
var app = http.createServer(expressvar);
console.log("iniciando servidor em http://localhost:8282/")
app.listen(8282);
