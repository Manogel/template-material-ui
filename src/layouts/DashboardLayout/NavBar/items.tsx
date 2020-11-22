import React from 'react';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon,
  Folder as FolderIcon,
} from 'react-feather';

import Label from '@components/Label';

export type INavigationSubPage = {
  href: string;
  title: string;
};

export type INavigationPage = {
  href: string;
  title: string;
  icon: React.FC<any>;
  children: INavigationPage[];
  label?: React.FC<any>;
};

const subpagesErrors = [
  {
    href: '/errors/404',
    title: '404',
  },
];

const subpagesProjects = [
  {
    href: '/app/projects',
    title: 'Projects',
  },
  {
    href: '/app/others-projects',
    title: 'Others projects',
  },
];

const pagesList = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/users',
    icon: UsersIcon,
    title: 'Usuários',
  },
  {
    href: '/app/projects',
    icon: FolderIcon,
    title: 'Projetos',
    children: subpagesProjects,
    label: () => (
      <Label color="success" shape="rounded">
        4
      </Label>
    ),
  },
  {
    icon: ShoppingBagIcon,
    title: 'Products',
    href: '/app/products',
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account',
  },
  {
    icon: AlertCircleIcon,
    title: 'Errors',
    href: '/errors',
    children: subpagesErrors,
  },
] as INavigationPage[];

const navItems = [
  {
    title: 'Paginas',
    pages: pagesList,
  },
];

export default navItems;
