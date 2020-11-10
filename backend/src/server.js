const express = require('express');

const server = express();

server.get('/', (request, result) => {
    return result.json({
        message: `Hello ${request.query.name}`
    });
});

server.listen(3333);