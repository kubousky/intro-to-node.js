var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000  // when deploying into heroku

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    //console.log(q.pathname)
    var filename = "." + q.pathname
    //console.log(filename)
    // aunque pasemos localhost:3000/ nos mandara a /index.html
    if(filename == './') {filename = './index.html';}
    
  fs.readFile(filename, function(err, data){
      if(err){
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(3000);

console.log('Server Listening on port 3000...')

//http://localhost:3000/
//http://localhost:3000/index.html
//http://localhost:3000/about.html