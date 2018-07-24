import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={() => (
        <div>
          404
        </div>
      )}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
