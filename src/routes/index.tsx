import React from 'react';

import SignIn from '@pages/SignIn';
import { Switch } from 'react-router-dom';
import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  );
};

export default Routes;
