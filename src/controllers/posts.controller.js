exports.createPost = (req, res, next) => {
  console.log(req.body)
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
