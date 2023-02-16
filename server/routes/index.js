const express = require('express')
const routes = new express.Router()

const deviceRouter = require('./deviceRoutes')
const userRoutes = require('./userRoutes')
const brandRoutes = require('./brandRoutes')
const typeRoutes = require('./typeRoutes')

routes.use('/user', userRoutes)
routes.use('/type', typeRoutes)
routes.use('/brand', brandRoutes)
routes.use('/device', deviceRouter)

module.exports = routes