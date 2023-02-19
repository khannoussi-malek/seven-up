import React, { useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './../../Providers/AuthContext';


 const Logout = () => {
  const { updateToken } = useAuthContext();
  const navigate = useNavigate();
  const queryCache = useQueryClient();

  useEffect(() => {
    updateToken(null);
    queryCache.clear();
    navigate('/');
  }, [updateToken, queryCache, navigate]);

  return (
    <>see you ...</>
  );
};

export default Logout;