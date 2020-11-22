import React from 'react';
import { useLocation } from 'react-router-dom';

import { List } from '@material-ui/core';

import { INavigationPage } from '../items';
import reduceChildRoutes from './reduceChildRoutes';

type INavigationListParams = {
  depth: number;
  pages: INavigationPage[];
};

const NavigationList = (props: INavigationListParams) => {
  const { pages, depth } = props;
  const router = useLocation();
  const currentRoute = router.pathname;

  const childRoutes = pages.reduce(
    (items, page) => reduceChildRoutes({ items, page, currentRoute, depth }),
    [] as JSX.Element[],
  );

  return <List>{childRoutes}</List>;
};

export default NavigationList;
