const express = require('express');

const app = express()
const HOST = 'localhost';
const PORT = 3000;

const db = [
    { key : 'key1', value : 'value1' },
    { key : 'key2', value : 'value2' },
    { key : 'key3', value : 'value3' },
    { key : 'key4', value : 'value4' },
    { key : 'key5', value : 'value5' }
]

app.get('/', (req, res) => {
    res.send('Hello.');
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
