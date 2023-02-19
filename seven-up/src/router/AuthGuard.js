import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from './../Providers/AuthContext';


export const AuthGuard = ({
  children,
}) => {
  const { isConnected } = useAuthContext();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
console.log(isConnected)
  useEffect(() => {
    if (!isConnected) {
      navigate(`/login?redirect=${encodeURIComponent(pathname + search)}`, {
        replace: true,
      });
    }
  }, [isConnected, navigate, pathname, search]);

  return !isConnected ? null :children;
};
