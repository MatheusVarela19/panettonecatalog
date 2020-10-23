import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Album from './Album';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Album }/>
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;