import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon,
  Folder as FolderIcon,
} from 'react-feather';

const navItems = [
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
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products',
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account',
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error',
  },
];

export default navItems;
