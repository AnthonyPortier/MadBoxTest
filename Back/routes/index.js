const express = require('express')
const Index = express.Router()
const word = require('./word')


Index.use('/index',word)

module.exports=Index
