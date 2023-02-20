const express = require('express')
const routes = new express.Router()
const DeviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/CheckRoleMiddleware");

routes.post('/', checkRole("ADMIN"), DeviceController.create)
routes.get('/', DeviceController.getAll)
routes.get('/:id', DeviceController.getOne)

module.exports = routes