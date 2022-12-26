import { IS_LOGGED_IN } from 'constants/utils';
import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: state => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (IS_LOGGED_IN) setIsLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
