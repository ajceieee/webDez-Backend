const mongoose = require('mongoose')
const User = require('./users.model')
const Comment = require('./comments.model')

const Schema = mongoose.Schema

const PostSchema = mongoose.Schema({
  postedBy: {
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
  comments: [
    {
      content: String,
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
})

module.exports = mongoose.model('Post', PostSchema)
