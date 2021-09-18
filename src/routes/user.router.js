const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

router
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .put(userController.updateUser)

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser)

module.exports = router
