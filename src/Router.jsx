import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Cards from './Components/Cards';
import CreateCard from './Components/CreateCard';

export default function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Cards/></Route>
                <Route path="/createCard"><CreateCard/></Route>
            </Switch>
        </div>
    )
}
