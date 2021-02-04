import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/index';
import Home from './pages/home/index';
import Create from './pages/create/index';
import Mural from './pages/mural/index';


export default function Router (){
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/create" exact component={Create} />
            <Route path="/mural" exact component={Mural} />
                
            </Switch>
        </BrowserRouter>
    )
}