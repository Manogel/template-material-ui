import React from 'react';

import { v4 as uuid } from 'uuid';

import { setToken } from '@services/api';
import Storage from '@services/storage';

interface IAuthContextData {
  loading: boolean;
  signed: boolean;
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const Auth = React.createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading] = React.useState(false);

  const [auth, setAuth] = React.useState<IAuthState>(() => {
    const [token, user] = Storage.get(['token', 'user']);

    if (token && user) {
      setToken(token);
      return {
        token,
        user,
      };
    }

    return {} as IAuthState;
  });

  const signIn = React.useCallback(
    async ({ email }) => {
      const user: IUser = {
        email,
        name: 'Fake user',
        id: uuid(),
      };
      const token = 'asdasdd';

      setAuth({ token, user });
      Storage.save('token', token);
      Storage.save('user', user);
    },
    [setAuth],
  );

  const signOut = React.useCallback(() => {
    Storage.delete(['token', 'user']);

    setAuth({} as IAuthState);
  }, []);

  return (
    <Auth.Provider
      value={{
        loading,
        signed: !!auth?.user,
        signIn,
        signOut,
        user: auth?.user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = React.useContext(Auth);

  return context;
}
