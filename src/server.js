const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(express.static('./src/public'))
app.use(bodyParser.json())

app.post('/move', (req, res) => {
  console.log(req.body.command)
  res.send({
    status: "Success",
    action: req.body.command
  })
})

app.listen(PORT, () => {
  console.log('Server is listening on port ', PORT)
})