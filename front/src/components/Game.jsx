import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../cssAppli.css';


const Game = (props) => {


    const [word, setWord] = useState([])
    const [inputTest, setInputTest] = useState('')
    const [point, setPoint] = useState(10)
    const [boolGet, setBoolGet] = useState(0)



    useEffect(() => {
        fetchData()
    }, [point])

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

    const lengthWord = word.english === undefined ? '' : word.english.length
    const splitWord = word.english === undefined ? '' : word.english.split('')
    const firstLetter = splitWord[0] === undefined ? '' : splitWord[0]

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