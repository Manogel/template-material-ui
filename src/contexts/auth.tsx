import React from 'react';

interface IAuthData {
  loading: boolean;
  signed: boolean;
}

const Auth = React.createContext<IAuthData>({} as IAuthData);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Auth.Provider value={{ loading, signed: false }}>{children}</Auth.Provider>
  );
};

export function useAuth(): IAuthData {
  const context = React.useContext(Auth);

  return context;
}
