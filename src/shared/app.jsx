import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';

export function App() {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}
