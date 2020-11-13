import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@contexts/auth';

import NavBar from './NavBar';
import useStyles from './styles';
import TopBar from './TopBar';

const DashboardLayout = () => {
  const { signed } = useAuth();
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  // if (!signed) {
  //   return <Navigate to="/auth" />;
  // }

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
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

export default DashboardLayout;