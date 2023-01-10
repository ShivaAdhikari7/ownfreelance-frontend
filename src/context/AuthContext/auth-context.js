import { IS_LOGGED_IN, USER_TYPE, TOKEN } from 'constants/utils';
import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: state => {},
  userType: '',
  setUserType: userType => {},
  token: '',
  setToken: token => {},
  userId: '',
  setUserId: userId => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (IS_LOGGED_IN) {
      setIsLoggedIn(true);
      setUserType(USER_TYPE);
      setToken(TOKEN);
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userType,
        setUserType,
        token,
        setToken,
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
