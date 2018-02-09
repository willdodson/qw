import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Bins from './components/Bins';
import Bin from './components/Bin';




export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/bins/:label" component={ Bins } />
        <Route path="/bin/:id" component={ Bin } />
    </Switch>
)