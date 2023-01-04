import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from 'context/AuthContext/auth-context';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');

      return;
    }
  }, [navigate, isLoggedIn]);

  return children;
};

export default ProtectedRoute;
