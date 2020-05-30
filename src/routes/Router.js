import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
//pages 
import About from '../pages/About';
import App from '../App';
import Buy from '../pages/Buy';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/about" component={About} />
                <Route path="/buy" component={Buy} />
            </Switch>
        </BrowserRouter>
    );
}