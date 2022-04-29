const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});



server.listen(port, host, () => {
    console.log('Web server running at http://%s:%s',host,port );
});