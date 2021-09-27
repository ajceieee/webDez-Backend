const User = require('../models/users.model')

exports.createUser = (req, res, next) => {
  res.send('created user')
}
exports.getAllUsers = (req, res, next) => {
  res.send('All users')
}
exports.getUser = async (req, res, next) => {
  try {
    const result = await User.userModel.findById(req.params.id)
    res.status(200).json({
      result: result,
    })
  } catch (error) {
    res.status(400).json({
      error: error,
    })
  }
}
exports.deleteUser = (req, res) => {
  res.send('deleteUser')
}
exports.updateUser = (req, res) => {
  res.send('updateUser')
}
