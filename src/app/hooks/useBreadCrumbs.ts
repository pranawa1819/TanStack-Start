import { isMatch, useMatches } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export const useBreadcrumbs = () => {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) => isMatch(match, 'loaderData.crumb'));

  const breadcrumbs = matchesWithCrumbs.map(({ id, pathname, loaderData }) => {
    return {
      id,
      label: loaderData?.crumb as ReactNode | string,
      path: pathname,
    };
  });

  return {
    breadcrumbs,
  };
};
