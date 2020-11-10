const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (request, result) => {
    return result.json({
        message: `Hello ${request.query.name}`
    });
});

routes.post('/devs', DevController.store);

module.exports = routes;