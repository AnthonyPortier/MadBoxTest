const express = require('express')
const words = express.Router()
const models = require('../models')
const verbs = require('../verbs')
const traductor = require('../traductor')



words.post('/dataWord', async (req, res) => {

    const dataExist = await models.Word.findOne({
        where: {
            id: 14
        }
    })
    if (dataExist) {
        res.send('database already exist')
    } else {

        Promise.resolve(verbs).then(allData => {
            models
                .Word
                .bulkCreate(allData)
                .then(allWords => res.send(allWords))
        })
    }
})



words.get('/oneWord', async (req, res) => {

    const theFrenchWord = await models.Word.findOne({
        where: {
            id: Math.floor(Math.random() * 500)
        }
    })
    traductor(theFrenchWord.word, res, theFrenchWord.level)

})


const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

words.get('/more/:number', async (req, res) => {
    models
        .Word
        .findAll({
            where: {
                level: randomInt(parseInt(req.params.number), 10)
            }
        })
        .then(more => {
            const length = more.length
            const randomWord = Math.floor((Math.random() * 500) % length)
            traductor(more[randomWord].word, res, more[randomWord].level)
        })
})

words.get('/less/:number', (req, res) => {
    models
        .Word
        .findAll({
            where: {
                level: randomInt(0, parseInt(req.params.number))
            }
        })
        .then(more => {
            const length = more.length
            const randomWord = Math.floor((Math.random() * 500) % length)
            traductor(more[randomWord].word, res, more[randomWord].level)

        })
})



module.exports = words