const userRoutes = require('express').Router()
    .post('/signup',onSignUp)


function onSignUp(req, res) {
    console.log(req.body);
    res.send('SignUp')
}


module.exports = userRoutes;