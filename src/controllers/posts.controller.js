const Post = require('../models/posts.model')

exports.createPost = (req, res, next) => {
  const post = new Post(req.body)

  post.save((err, result) => {
    if (err) console.log(err)
    else console.log(result)
  })
}
exports.getAllPosts = (req, res, next) => {
  res.send('All Post')
}
exports.getPost = (req, res, next) => {
  res.send('getPost')
}
exports.deletePost = (req, res) => {
  res.send('getPost')
}
exports.updatePost = (req, res) => {
  res.send('updatePost')
}
