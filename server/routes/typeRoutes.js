const express = require('express')
const routes = new express.Router()
const TypesController = require('../controllers/typeController')

routes.post('/', TypesController.create)
routes.get('/', TypesController.getAll)

module.exports = routes