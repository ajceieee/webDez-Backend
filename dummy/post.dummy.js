const mongoose = require('mongoose')
const dummy = require('mongoose-dummy')
const ignoredFields = ['_id', '__v', /detail.*_info/]
const Schema = mongoose.Schema
let schemaDefinition = new mongoose.Schema({
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
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})
let model = mongoose.model('Post', schemaDefinition)
let randomObject = dummy(model, {
  ignore: ignoredFields,
  returnDate: true,
})
console.log(JSON.stringify(randomObject))

// {
//   "user": "614f82e9fd606f98221f63f0",
//   "title": "Javier.Bode",
//   "votes": 7,
//   "photoUrl": "Ophelia53",
//   "videoUrl": "Julio40",
//   "category": "Danial78",
//   "comments": [
//     "614f82e9fd606f98221f63f0",
//   ],
//   "createdOn": "2021-09-25T01:43:14.750Z",
//   "decription": "Brenden81"
// }
