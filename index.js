const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) => {
    res.send('<h3> @akash23sk <h3>')
})

app.listen(port , () => {
    console.log(`Starts your server on the ${port}`)
})