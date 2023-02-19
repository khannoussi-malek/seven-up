import { useCallback } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

export const useRedirectUrl = (defaultUrl = '/') => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return useCallback(
    () =>
      navigate(
        searchParams.get('redirect')
          ? decodeURIComponent(searchParams.get('redirect') ?? '')
          : defaultUrl,
        { replace: true }
      ),
    [navigate, searchParams, defaultUrl]
  );
};
