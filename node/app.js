var express = require('express');
var app = express();
var ejs = require('ejs');
var url = require('url');
var querystring = require('querystring');


app.get('/:utilisateur/creation.html', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('creation.ejs', { utilisateur : req.params.utilisateur });
});

app.get('/:utilisateur/resultat.html', function(req, res) {

    res.setHeader('Content-Type', 'text/html');

    var params = querystring.parse(url.parse(req.url).query);

        if ('question' in params && 'reponse' in params) {

            if(params['question'] === "" || params['reponse'] === "") {
                res.send("Il faut remplir TOUT le formulaire");
            } else {
                var maCarte = {
                    "question": params['question'],
                    "reponse": params['reponse']
                 };
            
                console.log(maCarte);
                res.render('resultat.ejs', { utilisateur: req.params.utilisateur });
            }
        }
        else {
            res.send("Données incorrectes");
        }
});


app.listen(8080);