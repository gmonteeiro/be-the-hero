import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'; 
// para instalar rodar o comando npm install react-router-dom

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />
                <Route path="/register" component={ Register } />
            </Switch>
        </BrowserRouter>
    )
}
