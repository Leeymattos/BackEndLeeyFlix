const express = require('express')

const categoriesController = require('./controllers/categoriesController')
const videosController = require('./controllers/videosControllers')

const routes = express.Router()

routes.post('/cadastro/categoria', categoriesController.create)
routes.get('/cadastro/categoria', categoriesController.list)

routes.post('/cadastro/video', videosController.create)
routes.get('/cadastro/video', videosController.list)
routes.get('/videos/:id', videosController.listEspecfic)


module.exports = routes