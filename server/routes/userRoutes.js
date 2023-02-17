const express = require('express')
const routes = new express.Router()
const UserController = require('../controllers/userController')
const authCheckMiddleware = require('../middleware/AuthChecker')

routes.post('/registration', UserController.registration)
routes.post('/login', UserController.login)
routes.get('/auth',authCheckMiddleware, UserController.auth)

module.exports = routes