import React from 'react'
import {Link} from 'react-router-dom';
import '../cssAppli.css';





const Win = () => {

    return (
        <div className='container'>
            <h1 className='titleWin'>VOUS AVEZ GAGNÉ !!</h1>
            <Link className='reStart' to='/game'>Rejouer</Link>
        </div>
    )
}

export default Win;

