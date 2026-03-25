import { isMatch, useRouterState } from '@tanstack/react-router';

export const usePageTitle = () => {
  const title = useRouterState({
    select: (state) =>
      state.matches
        .filter((m) => isMatch(m, 'loaderData.title'))
        .map((m) => m.loaderData?.title)
        .pop() || '',
  });

  return { title };
};
