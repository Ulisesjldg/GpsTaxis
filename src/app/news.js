const bodyParser = require ('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Connection = require('mysql/lib/Connection');
const dbconnection = require('../config/dbconnection');

module.exports = app => {
    const connection = disconnection ();

    app.get('/', (req,res) => {
        connection.query('SELECT Latitud, Longitud, Timmestap', (err, result) => {
            res.render('news/news', {
                news: result
            });
        });
    });
}

