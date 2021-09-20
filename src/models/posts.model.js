const mongoose = require('mongoose')

const User = require('./users.model')
const Schema = mongoose.Schema

const PostSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    validate: {
      validator: (title) => title.length < 20 && title.length > 2,
      message: 'Title must be greater than length 2 and less than length 20',
    },
  },
  decription: {
    type: String,
  },
  createdOn: {
    type: Date,
  },
  votes: {
    type: Number,
    default: 0,
  },
  photoUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  creator: {
    type: User,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

module.exports = mongoose.model('Post', PostSchema)
