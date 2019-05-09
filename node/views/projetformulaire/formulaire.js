var express = require ('express');
var formulaire = express();
var url = require ('url');
var querystring = require ('querystring');
var mysql = requiere ('msql')

var connection = mysql.createConnection ( {
    host : "localhost.fr",
    user : "test",
    password : "test",
    database :"test"
}
   
);

formulaire.get('/liste.html', function (req, res) {

})