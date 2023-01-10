import { IS_LOGGED_IN, USER_TYPE, USER } from 'constants/utils';
import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: state => {},
  USER: "",
  setUser: (USER) => {},
  userType:"",
  setUserType: () => {},

});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");


  useEffect(() => {
    if (IS_LOGGED_IN){
      setIsLoggedIn(true);
      setUserType(USER_TYPE);
      setUser(USER);
    } 

  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, userType, setUserType }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
