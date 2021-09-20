const express = require('express')
const userController = require('../controllers/posts.controller')

const router = express.Router()

router
  .route('/:id')
  .get(userController.getPost)
  .delete(userController.deletePost)
  .put(userController.updatePost)

router
  .route('/')
  .get(userController.getAllPosts)
  .post(userController.createPost)

module.exports = router
