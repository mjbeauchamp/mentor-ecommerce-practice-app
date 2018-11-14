const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')
const controller = require("./controller")

const app = express()

app.use(bodyParser.json())

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
})

////////////ENDPOINTS////////////

app.post("/register", controller.register)








app.listen(SERVER_PORT, () => {
    console.log(`Anchors away on port ${SERVER_PORT}!`)
})