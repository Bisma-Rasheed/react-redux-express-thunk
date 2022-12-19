const messagesArr = [];
const messagesRouter = require('express').Router()
    .get('/', getMessages)
    .post('/add', addMessage)

function addMessage(req, res) {
    if(req.body.message)
        messagesArr.push(req.body.message);
    
    res.send(messagesArr);
}

function getMessages(req, res) {
    res.send(messagesArr);
}

module.exports = messagesRouter;