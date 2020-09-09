const express = require('express')

const seasonController = require('./controllers/seasonControllers')
const videosController = require('./controllers/videosControllers')
const userController = require('./controllers/userControllers')

const routes = express.Router()

routes.post('/register/season', seasonController.create)
routes.get('/register/season', seasonController.list)

routes.post('/register/video', videosController.create)
routes.get('/register/video', videosController.list)

routes.post('/register/user', userController.create)
routes.post('/login/user', userController.login)

module.exports = routes