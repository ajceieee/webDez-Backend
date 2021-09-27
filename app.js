const express = require('express')
const morgan = require('morgan')

const userRouter = require('./src/routes/user.router')
const postRouter = require('./src/routes/post.router')

const app = express()

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/post', postRouter)

module.exports = app
