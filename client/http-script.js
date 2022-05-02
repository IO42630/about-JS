const http = require('http');

exports.loadByHttp = function loadByHttp() {
    let content = document.getElementById("http_content").innerHTML;
    const options = {
        hostname: 'example.com',
        port: 443,
        path: '/todos',
        method: 'GET',
    };

    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            process.stdout.write(d);
        });
    });

    req.on('error', error => {
        console.error(error);
    });

    req.end();
}