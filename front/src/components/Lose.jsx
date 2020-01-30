import React from 'react'
import { Link } from 'react-router-dom';
import '../cssAppli.css';





const Lose = () => {

    return (
        <div className='container'>
            <h1 className='titleLose'>VOUS AVEZ PERDU !!</h1>
            <Link className='reStart' to='/game'>Rejouer</Link>
        </div>
    )
}

export default Lose;
