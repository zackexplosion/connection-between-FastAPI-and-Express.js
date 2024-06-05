const express = require('express')
const app = express()
const axios = require('axios')


app.get('/', (req, res) => {
  return res.json({message: 'Hello I am Express.js'})
})


app.get('/hello_to_fastapi', async (req, res) => {
  const response = await axios.get('http://127.0.0.1:8000/hello_to_node')
  return res.json(response.data)
})

app.listen(3001, function() {
  console.log('listening on http://localhost:3001')
})