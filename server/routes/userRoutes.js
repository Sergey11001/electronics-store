const express = require('express')
const routes = new express.Router()
const UserController = require('../controllers/userController')

routes.post('/registration', UserController.registration)
routes.post('/login', UserController.login)
routes.get('/auth', UserController.auth)

module.exports = routes