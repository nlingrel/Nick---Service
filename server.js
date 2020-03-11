const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 8084

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Service listening on port ${port}!`))