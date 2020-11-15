import { subMinutes, subHours, subDays } from 'date-fns';
import { v4 as uuid } from 'uuid';

import { colors } from '@material-ui/core';

export type IProject = {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  price: string;
  currency: string;
  type: string;
  location: string;
  status: 'In progress' | 'Canceled' | 'Completed';
  members: number;
  tags: {
    text: string;
    color: string;
  }[];
  start_date: Date;
  end_date: Date;
  updated_at: Date;
};

const projectsData = [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'In progress',
    members: 5,
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600],
      },
    ],
    start_date: new Date(),
    end_date: new Date(),
    updated_at: subMinutes(Date.now(), 24),
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'In progress',
    members: 3,
    tags: [
      {
        text: 'HTML & CSS',
        color: colors.grey[600],
      },
    ],
    start_date: new Date(),
    end_date: new Date(),
    updated_at: subMinutes(Date.now(), 60),
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'Completed',
    members: 8,
    tags: [
      {
        text: 'React JS',
        color: colors.indigo[600],
      },
    ],
    start_date: new Date(),
    end_date: new Date(),
    updated_at: subHours(Date.now(), 16),
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png',
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'In progress',
    members: 10,
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600],
      },
    ],
    start_date: new Date(),
    end_date: new Date(),
    updated_at: subDays(Date.now(), 3),
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'Canceled',
    members: 2,
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600],
      },
      {
        text: 'HTML & CSS',
        color: colors.grey[600],
      },
    ],
    start_date: new Date(),
    end_date: new Date(),
    updated_at: subDays(Date.now(), 7),
  },
  {
    id: uuid(),
    title: 'Kalli UI Kit',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    status: 'Completed',
    members: 12,
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600],
      },
    ],
    start_date: new Date(),
    end_date: new Date(),
    updated_at: subDays(Date.now(), 8),
  },
] as IProject[];

export default projectsData;
