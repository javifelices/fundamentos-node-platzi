const { createServer } = require('http');

const port = 8082;

const router = (req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
            res.end('<h1>Hooola</h1>');
            break;
        default:
            res.write('404 Not Found');
            res.end();
    }
};

const server = createServer(router);

server.listen(port, (err) => {
    if (err) {
        console.info('Could not establesih a coneection to the server');
        console.error(err.message);
    }
    console.info(`> Ready on http://localhost:${port}`);
});
