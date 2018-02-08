const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');

const app = express();

app.use(expressMongoDb('mongodb://localhost/walter-admin'));
app.use(bodyParser.json());

app.get('/clientes', (req, res) => {
    req.db.collection('clientes')
    .find({})
    .toArray((err, data) => {
        res.send(data);
    });
});

app.post('/clientes', (req, res) => {
    console.log(req.body);

    req.db.collection('clientes')
    .insert(req.body, (err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na 3000'); 
});