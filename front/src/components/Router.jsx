import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/Accueil' component={Accueil}/>
            </Switch>
        </div>

    )
}

export default Router;