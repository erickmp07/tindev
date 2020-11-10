const express = require('express');

const routes = express.Router();

routes.get('/', (request, result) => {
    return result.json({
        message: `Hello ${request.query.name}`
    });
});

module.exports = routes;