import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomeWallet from './Components/HomeWallet';
import CreateCard from './Components/CreateCard';
import { AnimatePresence } from 'framer-motion';

export default function Router() {
    return (
        <div>
            <AnimatePresence>
                <Switch>
                    <Route exact path="/"><HomeWallet/></Route>
                    <Route path="/createCard"><CreateCard/></Route>
                </Switch>
            </AnimatePresence>
        </div>
    )
}
