import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, PageNotFound } from '@pages';

export const AuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
