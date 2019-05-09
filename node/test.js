var express = require('express');
var app = express();
var url = require('url');
var querystring = require('querystring');

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send("<strong>Hello World</strong>");
});

app.get('/form.html', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send("<!DOCTYPE html>" +
            "<html>" +
            "    <head>" +
            "        <meta charset='utf-8'/>" +
            "        <title>Mon formulaire</title>" +
            "    </head>" +
            "    <body>" +
            "     	<form action='/resultat.html' method='GET'>" +
            "           <input type='text' name='nom' placeholder='votre nom'>" +
            "           <input type='text' name='prenom' placeholder='votre prénom'>" +
            "           <button type='submit'>GO</button>" +
            "       </form>"+
            "    </body>"+
            "</html>");
});

app.get('/resultat.html', function(req, res) {

    res.setHeader('Content-Type', 'text/html');

    var params = querystring.parse(url.parse(req.url).query);

        if ('prenom' in params && 'nom' in params) {

            if(params['prenom'] === "" || params['nom'] === "") {
                res.send("Il faut remplir TOUT le formulaire");
            } else {
                res.send("Hey !, vous vous appelez : " + params['prenom'] + " " + params['nom']);
            }
        }
        else {
            res.send("Données incorrectes");
        }
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send("404 : Y'a personne ici...");
    console.error("Une erreur 404 a été retournée");
});

app.listen(8080);