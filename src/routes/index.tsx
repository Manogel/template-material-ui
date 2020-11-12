import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '@pages/SignIn';

import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  );
};

export default Routes;
