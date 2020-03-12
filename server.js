const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8084

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname,"client/dist")));

app.get('/', (req, res) => res.send('Review service'))

app.listen(port, () => console.log(`Service listening on port ${port}!`))