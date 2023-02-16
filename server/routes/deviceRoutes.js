const express = require('express')
const routes = new express.Router()
const DeviceController = require('../controllers/deviceController')

routes.post('/', DeviceController.create)
routes.get('/', DeviceController.getAll)
routes.get('/:id', DeviceController.getOne)

module.exports = routes