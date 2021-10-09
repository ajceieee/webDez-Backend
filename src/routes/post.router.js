const express = require('express')
const userController = require('../controllers/posts.controller')
const upload = require('../../services/imgup.service')
const router = express.Router()

router
  .route('/:id')
  .get(userController.getPost)
  .delete(userController.deletePost)
  .put(userController.updatePost)

router
  .route('/')
  .get(userController.getAllPosts)
  .post(upload.single('photoUrl'), userController.createPost)

module.exports = router
