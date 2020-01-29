const express = require('express')
const words = express.Router()
const models = require('../models')
const verbes = require('../verbes')
const traductor = require('../traductor')



words.post('/dataWord', async(req, res) => {

     const dataExist = await models.Word.findOne({where: {id: 14}})
     if (dataExist) {
         res.send('database already exist')
     } else {
        
         Promise.resolve(verbes).then(allData => {
             models
                 .Word
                 .bulkCreate(allData)
                 .then(allWords => res.send(allWords))
         })
     }
})

words.get('/oneWord', async(req, res) => {

    const theFrenchWord = await models.Word.findOne({where: {id: Math.floor(Math.random() *7972)}})
    traductor(theFrenchWord.word,res,theFrenchWord.level)

})

module.exports = words