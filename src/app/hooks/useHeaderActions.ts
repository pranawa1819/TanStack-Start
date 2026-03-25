import { isMatch, useRouterState } from '@tanstack/react-router';

export const useHeaderActions = () => {
  const actions = useRouterState({
    select: (state) =>
      state.matches
        .filter((m) => isMatch(m, 'loaderData.actions'))
        .map((m) => m.loaderData?.actions)
        .pop() || undefined,
  });

  return { actions };
};
