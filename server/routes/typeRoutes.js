const express = require('express')
const routes = new express.Router()
const TypesController = require('../controllers/typeController')
const checkRole = require('../middleware/CheckRoleMiddleware')

routes.post('/', checkRole("ADMIN"), TypesController.create)
routes.get('/', TypesController.getAll)

module.exports = routes