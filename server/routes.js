const routes = require('express').Router();
const usersController = require('./users-controller');
const messagesController = require('./message-controller');

routes.get('/', (req, res) => {
    res.send('Hello');
})

routes.use('/user', usersController);
routes.use('/message', messagesController);

module.exports = routes;