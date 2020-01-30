import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Game from './Game';
import Win from './Win';
import Lose from './Lose';


const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/game' component={Game} />
                <Route exact path='/youwin' component={Win} />
                <Route exact path='/youlose' component={Lose} />
            </Switch>
        </div>

    )
}

export default Router;