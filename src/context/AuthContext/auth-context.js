import { IS_LOGGED_IN, USER_TYPE, USER, TOKEN } from 'constants/utils';
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
  USER: '',
  setUser: USER => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    if (IS_LOGGED_IN) {
      setToken(TOKEN);
      setUserType(USER_TYPE);
      setIsLoggedIn(true);
      setUser(USER);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
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
