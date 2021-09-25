/*
https://github.com/microsoft/vscode-recipes/tree/master/nodemon
*/

const http = require('http');

const router = (req, res) => {
    console.log('Nueva petición');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
            res.write('Hola, ¿qué tal?');
            res.end();
            break;
        default:
            res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
            res.write('Error 404: No sé lo que quieres');
            res.end();
    }

    // res.writeHead(201, { 'content-type': 'text/plain; charset=utf-8' });
    // res.write('Hola ya sé usar HTTP de Nodejs');

    // res.end();
};

http.createServer(router).listen(8082);

console.log('Escuchando http en el puerto 8082');
