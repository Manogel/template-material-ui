import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import AuthLayout from '@layouts/AuthLayout';
import DashboardLayout from '@layouts/DashboardLayout';
import MainLayout from '@layouts/MainLayout';
import SignIn from '@pages/auth/SignIn';
import Dashboard from '@pages/Dashboard';
import NotFound from '@pages/errors/NotFound';
import Users from '@pages/Users';

import Route from './Route';

const routes: PartialRouteObject[] = [
  {
    path: 'app',
    element: <Route component={DashboardLayout} isPrivate />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/app/dashboard" replace /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/auth" replace /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
  {
    path: '/auth',
    element: <Route component={AuthLayout} />,
    children: [{ path: '/', element: <SignIn /> }],
  },
];

export default routes;
