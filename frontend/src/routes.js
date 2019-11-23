import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Initial from './pages/Initial';
import Computers from './pages/Computers';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
                <Route path="/computers" component={Computers} />
            </Switch>
        </BrowserRouter>
    );
}