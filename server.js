const dotEnv = require('dotenv')
const mongoose = require('mongoose')

dotEnv.config({
  path: './config.env',
})

const app = require('./app')
const log = require('./src/utils/log')

const DB_URL = process.env.DATABASE.replace('<password>', process.env.PASSWORD)

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected succesfully'))
  .catch((e) => console.log(`Error(DB Connection): FailedtoConnect'  ${e}`))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  log(`Listening on port ${PORT}`)
})
