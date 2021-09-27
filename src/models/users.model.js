const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: {
    unique: true,
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
  },
  accountCreated: {
    type: Date,
  },
})

module.exports = mongoose.model('User', userSchema)
