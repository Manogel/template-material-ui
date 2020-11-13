import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from '@layouts/DashboardLayout';
import MainLayout from '@layouts/MainLayout';
import DashboardView from '@pages/DashboardView';
import NotFoundView from '@pages/errors/NotFoundView';
import SignIn from '@pages/SignIn';
import Users from '@pages/Users';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
