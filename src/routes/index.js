import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home'
import Produto from '../pages/Produto'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/produto/:id" component={Produto}/>
      </Switch>
    </BrowserRouter>
  );
}
