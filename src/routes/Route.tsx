import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@contexts/auth';

interface IRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
}) => {
  const { signed } = useAuth();

  if (isPrivate === signed) {
    return <Component />;
  }

  return <Navigate to={isPrivate ? '/auth' : '/app'} />;
};

export default Route;
