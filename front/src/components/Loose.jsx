import React from 'react'
import { Link } from 'react-router-dom';
import '../cssAppli.css';





const Loose = () => {

    return (
        <div className='container'>
            <h1 className='titleLoose'>VOUS AVEZ PERDU !!</h1>
            <Link className='reStart' to='/game'>Rejouer</Link>
        </div>
    )
}

export default Loose;
