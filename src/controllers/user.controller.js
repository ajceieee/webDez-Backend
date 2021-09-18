exports.createUser = (req, res, next) => {
  res.send('created user')
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
