import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@contexts/auth';

import useStyles from './styles';
import TopBar from './TopBar';

const AuthLayout = () => {
  const { signed } = useAuth();
  const classes = useStyles();

  // if (signed) {
  //   return <Navigate to="/app" />;
  // }

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
