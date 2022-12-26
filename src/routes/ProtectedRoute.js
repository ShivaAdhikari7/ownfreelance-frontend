import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IS_LOGGED_IN } from 'constants/utils';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!IS_LOGGED_IN) {
      navigate('/');

      return;
    }
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
