import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from 'context/AuthContext/auth-context';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');

      return;
    }
  }, [navigate, token]);

  return children;
};

export default ProtectedRoute;
