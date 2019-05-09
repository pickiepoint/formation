var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});
    if (page == '/') {
        res.write("Hello World");
    }
    else if (page == '/bonjour.html') {
        res.write("Bonjour !");
    }
    else if (page == '/au_revoir.html') {
        res.write("Bonsoir !");
    }
    res.end();
});
server.listen(8080);
