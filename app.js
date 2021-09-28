const express = require('express')
const morgan = require('morgan')

const userRouter = require('./src/routes/user.router')
const postRouter = require('./src/routes/post.router')
const rootRouter = require('./src/routes/root.router')
const healthRouter = require('./src/routes/health.router')

const app = express()

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/health', healthRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/post', postRouter)
app.use('/*', rootRouter)

module.exports = app
