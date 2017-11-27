var express = require('express');
var history = require('connect-history-api-fallback')
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(history({verbose: true}))
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 8080;
app.listen(port);
app.get('*', (req, res) => {
    res.sendFile('./dist/index.html')
});
app.use(require('connect-history-api-fallback')({
    disableDotRule: true,
    rewrites: [
        {from: /\/app.js/, to: '/app.js'}
    ]
}))
console.log('server started '+ port);
