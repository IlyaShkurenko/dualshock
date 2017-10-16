var fs = require('fs');

module.exports = function handler(req,res) {
  if(req.url == '/'){
      fs.readFile('xvfx',function (err,content) {
          if(err) throw err;

          res.end(content);
      });
  }
  else {
      res.statusCode = 404;
      res.end('Not found');
  }
};