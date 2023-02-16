const express = require('express')
const routes = new express.Router()
const BrandController = require('../controllers/brandController')

routes.post('/', BrandController.create)
routes.get('/', BrandController.getAll)

module.exports = routes