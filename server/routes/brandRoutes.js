const express = require('express')
const routes = new express.Router()
const BrandController = require('../controllers/brandController')
const checkRole = require('../middleware/CheckRoleMiddleware')


routes.post('/', checkRole("ADMIN"), BrandController.create)
routes.get('/', BrandController.getAll)

module.exports = routes