import { IS_LOGGED_IN, USER_TYPE, USER } from "constants/utils";
import { useState, useEffect, createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (state) => {},
  userType: "",
  setUserType: () => {},
  USER: "",
  setUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (IS_LOGGED_IN) {
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
        userType,
        setUserType,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
