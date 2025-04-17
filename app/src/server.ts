const express = require('express')
const utils = require('./utils')

const app = express()
const port = 3000

require('@cypress/code-coverage/middleware/express')(app)

app.get('/', (req, res) => {
  res.send('Hello World! 1+2=' + utils.add(1, 2))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
