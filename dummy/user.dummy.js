const mongoose = require('mongoose')
const dummy = require('mongoose-dummy')
const ignoredFields = ['_id', '__v', /detail.*_info/]
const Schema = mongoose.Schema
let schemaDefinition = new mongoose.Schema({
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
let model = mongoose.model('Post', schemaDefinition)
let randomObject = dummy(model, {
  ignore: ignoredFields,
  returnDate: true,
})
console.log(JSON.stringify(randomObject))
