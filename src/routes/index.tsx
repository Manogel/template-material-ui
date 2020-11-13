import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import AuthLayout from '@layouts/AuthLayout';
import DashboardLayout from '@layouts/DashboardLayout';
import MainLayout from '@layouts/MainLayout';
import DashboardView from '@pages/DashboardView';
import NotFoundView from '@pages/errors/NotFoundView';
import SignIn from '@pages/SignIn';
import Users from '@pages/Users';

import Route from './Route';

const routes: PartialRouteObject[] = [
  {
    path: 'app',
    element: <Route component={DashboardLayout} isPrivate />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/auth" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <Route component={AuthLayout} />,
    children: [{ path: '/', element: <SignIn /> }],
  },
];

export default routes;
