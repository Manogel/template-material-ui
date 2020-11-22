import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import AuthLayout from '@layouts/AuthLayout';
import DashboardLayout from '@layouts/DashboardLayout';
import MainLayout from '@layouts/MainLayout';
import Account from '@pages/Account';
import SignIn from '@pages/auth/SignIn';
import Dashboard from '@pages/Dashboard';
import NotFound from '@pages/errors/NotFound';
import Products from '@pages/Products';
import Projects from '@pages/Projects';
import UserDetail from '@pages/UserDetail';
import Users from '@pages/Users';

import Route from './Route';

const routes: PartialRouteObject[] = [
  {
    path: 'app',
    element: <Route component={DashboardLayout} isPrivate />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'users/:id', element: <UserDetail /> },
      { path: 'users/:id/:tab', element: <UserDetail /> },
      { path: 'projects', element: <Projects /> },
      { path: 'others-projects', element: <Projects /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <Products /> },
      { path: 'account', element: <Account /> },
      { path: '/', element: <Navigate to="/app/dashboard" replace /> },
      { path: '*', element: <Navigate to="/auth" replace /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'errors/404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/auth" replace /> },
      { path: '*', element: <Navigate to="/auth" replace /> },
    ],
  },
  {
    path: '/auth',
    element: <Route component={AuthLayout} />,
    children: [{ path: '/', element: <SignIn /> }],
  },
];

export default routes;
