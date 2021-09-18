const dotEnv = require('dotenv')

const app = require('./app')
const log = require('./src/utils/log')

dotEnv.config({
  path: './config.env',
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  log(`Listening on port ${PORT}`)
})
