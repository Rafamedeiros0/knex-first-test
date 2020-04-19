const express = require ('express');

// criar controolers

const PeopleController = require('./controllers/PeopleController');

const routes = express.Router();

// rotas dos controolers
routes.get('/people', PeopleController.index);
routes.post('/people', PeopleController.create);

module.exports = routes;
