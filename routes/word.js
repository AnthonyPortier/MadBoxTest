const express = require('express')
const words = express.Router()
const models = require('../models')
const verbes = require('../verbes')


words.post('/dataWord',(req,res)=>{
Promise.resolve(verbes).then(x=>{
    models
     .Word
     .bulkCreate(x)
     .then(allWords=>res.send(allWords))
})
})


module.exports=words