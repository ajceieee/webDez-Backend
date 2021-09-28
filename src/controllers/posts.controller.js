const Post = require('../models/posts.model')

exports.createPost = (req, res) => {
  const post = new Post(req.body)

  post.save((err, result) => {
    if (err) {
      res.status(400).json({
        status: res.statusCode,
        result: {
          error: err,
        },
      })
    } else {
      res.status(201).json({
        status: res.statusCode,
        result: {
          msg: 'Post created successFully',
          user: result,
        },
      })
    }
  })
}

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).json({
      status: res.statusCode,
      result: posts,
    })
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      result: {
        error: error,
      },
    })
  }
}

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id).populate('postedBy')
    res.status(200).json({
      status: res.statusCode,
      result: posts,
    })
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      result: {
        error: error,
      },
    })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const posts = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: res.statusCode,
      result: posts,
    })
  } catch (error) {
    res.status(400).json({
      status: res.statusCode,
      result: {
        error: error,
      },
    })
  }
}

exports.updatePost = (req, res) => {
  res.send('updatePost')
}
