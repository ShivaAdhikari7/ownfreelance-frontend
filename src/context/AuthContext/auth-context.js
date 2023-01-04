import { IS_LOGGED_IN, USER_TYPE } from 'constants/utils';
import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: state => {},
  userType: '',
  setUserType: userType => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    if (IS_LOGGED_IN) {
      setIsLoggedIn(true);
      setUserType(USER_TYPE);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userType, setUserType }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
