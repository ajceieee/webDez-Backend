const express = require('express')
const morgan = require('morgan')

const userRouter = require('./src/routes/user.router')

const app = express()

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/user', userRouter)

module.exports = app
