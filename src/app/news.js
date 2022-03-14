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

// valores de la pagina y los pasa a base de datos

app.post('/agregar'), (req,res) => {

    const {Latitud, Longitud, Timmestamp} = req.body;
    Connection.query('INSERT INTO DATOS SET?'), {
        Latitud, Longitud, Timmestamp
    }, (err, result) => {
        res.redirect('/'); 
    }
}
