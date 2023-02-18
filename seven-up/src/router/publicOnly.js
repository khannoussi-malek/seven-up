
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './../Providers/AuthContext';


export const PublicOnly = ({
  children,
}) => {
  const { isConnected } = useAuthContext();

  return isConnected ? (
    <Navigate to="/" replace />
  ) : children;
};
