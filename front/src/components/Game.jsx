import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssAppli.css';


const Game = (props) => {

    // hooks qui get la data
    const [word, setWord] = useState([])

    // hooks qui permet de vider l'input après utilisation
    const [inputTest, setInputTest] = useState('')

    // hooks des points initialisés à 10
    const [point, setPoint] = useState(10)

    // hooks qui permet de trouver une boolean ou 0 pour définir le get à utiliser
    const [boolGet, setBoolGet] = useState(0)



    useEffect(() => {
        fetchData()
    }, [point])


    // get de la data avec trois possibilités : get du debut, get un objet avec level supérieur et get avec un level inférieur
    const fetchData = async () => {
        if (boolGet === 0) {
            await axios.get('http://localhost:5000/racine/index/oneWord')
                .then(res => setWord(res.data))
                .catch(err => console.log(err))
        } else if (boolGet === true) {
            await axios.get(`http://localhost:5000/racine/index/more/${word.level}`)
                .then(res => setWord(res.data))
                .catch(err => console.log(err))
        } else if (boolGet === false) {
            await axios.get(`http://localhost:5000/racine/index/less/${word.level}`)
                .then(res => setWord(res.data))
                .catch(err => console.log(err))
        }
    }

    // 3 constantes qui permettent de vérifier si le get de la data est undifined
    const lengthWord = word.english === undefined ? '' : word.english.length
    const splitWord = word.english === undefined ? '' : word.english.split('')
    const firstLetter = splitWord[0] === undefined ? '' : splitWord[0]


    // const qui permet d'ajouter ou diminuer points, de vider l'input et de definir un boolean qui conditionnera le get de la data
    const algoPoint = () => {
        if (inputTest === word.english) {
            setPoint(point + 1)
            setInputTest('')
            setBoolGet(true)
        }
        else if (inputTest !== word.english) {
            setPoint(point - 1)
            setInputTest('')
            setBoolGet(false)
        }
    }

    // const redirection sur une autre page win ou lose en fonction du nombre de point
    const redirection = () => {
        if (point === 19) {
            props.history.push(`/youwin`)
        } else if (point === 1) {
            props.history.push(`/youlose`)
        }
    }

    const container = () => {
        algoPoint()
        redirection()
    }

    return (
        <div className='container'>
            <label htmlFor="word">Le mot à traduire en anglais est : {word.french} </label>
            <input
                className="inputGame"
                type="text"
                id="word"
                name="word"
                required
                maxLength={lengthWord}
                size="30"
                placeholder={firstLetter + '...'}
                value={inputTest}
                onChange={(e) => { setInputTest(e.target.value) }} />

            <p>Il contient {lengthWord} lettres</p>
            <p>{point} Points</p>
            <p>difficulté {word.level}/10</p>

            <button className='gameButton' onClick={container}>essayer</button>
        </div>

    )
}

export default Game