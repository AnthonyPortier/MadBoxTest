import React from 'react'
import axios from 'axios'



const Accueil =()=>{

    const postData=()=>{
        axios.post('http://localhost:5000/racine/index/dataWord')
            .then(response => console.log(response))
            .catch(err => console.log(err)) 
            
    }

    return(
        <div>
            <button onClick={postData}>Let's Play</button>
        </div>
    )
}

export default Accueil;

// props.history.push(`/admin/neoworker/liste`)
