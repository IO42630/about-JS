const express = require('express');
const cors = require('cors');

const app = express()
const HOST = 'localhost';
const PORT = 4203;

const db = [
    {id: 11, name: 'Dr Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
]

app.use(cors()); // allow cross origin requests.

app.get('/api/heroesDataStore', (req, res) => {
    res.send(db)
    ;
});

app.get('/one', (req, res) => {
    res.send(db[0]);
});

app.get('/all', (req, res) => {
    res.send(db);
});

app.listen(PORT, HOST, () => {
    console.log('Web server running at %s:%s.', HOST, PORT);
});
