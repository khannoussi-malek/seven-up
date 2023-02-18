
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './../Providers/AuthContext';


export const PublicOnly = ({
  children,
}) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : children;
};
