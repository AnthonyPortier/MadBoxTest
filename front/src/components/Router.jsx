import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Game from './Game';
import Win from './Win';
import Loose from './Loose';


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Accueil}/>
                <Route exact path='/game' component={Game} />
                <Route exact path='/youwin' component={Win} />
                <Route exact path='/youloose' component={Loose} />



            </Switch>
        </div>

    )
}

export default Router;