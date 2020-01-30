require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
const routes = require('./routes')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const port = process.env.PORT

app.use('/racine', routes)

models
    .sequelize
    .sync({
        force: true
    })
    .then(() => app.listen(port, console.log('Server is Running')))