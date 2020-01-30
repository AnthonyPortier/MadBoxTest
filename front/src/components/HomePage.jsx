import React from 'react'
import axios from 'axios'
import '../cssAppli.css'



const HomePage = (props) => {

    // post de la data au click sur let's Play dans la HomePage
    const postData = async () => {
        await axios.post('http://localhost:5000/racine/index/dataWord')
            .catch(err => console.log(err))
            .then(response => response ? props.history.push(`/game`) : '')
    }

    return (
        <div className='container'>
            <button className='homePageButton' onClick={postData}>Let's Play !</button>
        </div>
    )
}

export default HomePage;

