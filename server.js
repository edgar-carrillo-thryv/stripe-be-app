const express = require('express')
const app = express()
const port = 3005

app.get('/', () => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
