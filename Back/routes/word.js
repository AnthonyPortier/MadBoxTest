const express = require('express')
const words = express.Router()
const models = require('../models')
const verbs = require('../verbs')
const traductor = require('../traductor')


// post de la data au moment du click sur le bouton 'jouer' 
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


// get de la data sur un mot francais anglais et le lever
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

// get de la data sur un mot francais anglais et level si level supérieur au level du mot précédent
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

// get de la data sur un mot francais anglais et level si level inferieur au level du mot précédent
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