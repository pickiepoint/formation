var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log("Page demandée : ", page);
    if (page == '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Hello World");
    }
    else if (page == '/bonjour.html') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Bonjour !");
    }
    else if (page == '/au_revoir.html') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("Bonsoir !");
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 : Y'a personne ici...");
        console.error("Une erreur 404 a été retournée");
    }

    res.end();
});
server.listen(8080);