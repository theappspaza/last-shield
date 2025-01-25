import React, { createContext, useContext, useEffect, useState } from 'react';
import { useStore } from './store'; 
import jwt from 'jsonwebtoken';

const AuthContext = createContext({ isAuthenticated: false });

export const LastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setToken, token } = useStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const cookieToken = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (cookieToken) {
      const validToken = cookieToken.split('=')[1];
      const localToken = jwt.sign({ data: validToken }, 'your-secret-key', { expiresIn: '1h' });
      setToken(localToken);
      setIsAuthenticated(true);
    }
  }, [setToken]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);