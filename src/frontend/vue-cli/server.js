var express = require('express');
var history = require('connect-history-api-fallback')
var path = require('path');
var serveStatic = require('serve-static');
var rewriter = require('express-rewrite');
app = express();
app.use(history({verbose: true}))
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 8080;
app.listen(port);
app.use(require('connect-history-api-fallback')({
    disableDotRule: false
}))

console.log('server started '+ port);
