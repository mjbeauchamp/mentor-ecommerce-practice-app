const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')

const app = express()

app.use(bodyParser.json())

const {SERVER_PORT} = process.env



app.listen(SERVER_PORT, () => {
    console.log(`Anchors away on port ${SERVER_PORT}!`)
})