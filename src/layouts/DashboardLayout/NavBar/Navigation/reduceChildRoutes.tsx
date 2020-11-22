import React from 'react';
import { matchPath } from 'react-router-dom';

import { INavigationPage } from '../items';
import { NavigationListItem } from './components';
import NavigationList from './NavigationList';

type IReduceChildRoutesParams = {
  depth: number;
  page: INavigationPage;
  items: JSX.Element[];
  currentRoute: string;
};

const reduceChildRoutes = (props: IReduceChildRoutesParams) => {
  const { items, page, depth, currentRoute } = props;

  if (page.children) {
    const open = matchPath(currentRoute, page.href);

    items.push(
      <NavigationListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={!!open}
        title={page.title}
        href={page.href}
      >
        <NavigationList depth={depth + 1} pages={page.children} />
      </NavigationListItem>,
    );
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />,
    );
  }

  return items;
};

export default reduceChildRoutes;
