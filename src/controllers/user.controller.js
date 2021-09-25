const User = require('../models/users.model')

exports.createUser = (req, res, next) => {
  const user = new User(req.body)

  user.save((err, result) => {
    if (err) console.log(err)
    else console.log(result)
  })
}
exports.getAllUsers = (req, res, next) => {
  res.send('All users')
}
exports.getUser = (req, res, next) => {
  res.send('getUser')
}
exports.deleteUser = (req, res) => {
  res.send('deleteUser')
}
exports.updateUser = (req, res) => {
  res.send('updateUser')
}
