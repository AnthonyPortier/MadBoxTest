import React from 'react'
import axios from 'axios'
import '../cssAppli.css'



const Accueil =(props)=>{

    const postData=()=>{
        axios.post('http://localhost:5000/racine/index/dataWord')
            .then(response => console.log(response))
            .catch(err => console.log(err)) 
            props.history.push(`/game`)
            
    }

    return(
        <div className='container'>
            <button className='boutonAccueil' onClick={postData}>Let's Play !</button>
        </div>
    )
}

export default Accueil;

