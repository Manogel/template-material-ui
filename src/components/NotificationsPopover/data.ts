import { sub } from 'date-fns';
import { v4 as uuid } from 'uuid';

const notificationsMockData = [
  {
    id: uuid(),
    title: 'New order has been received',
    type: 'order',
    created_at: sub(Date.now(), {
      hours: 2,
    }),
  },
  {
    id: uuid(),
    title: 'New customer is registered',
    type: 'user',
    created_at: sub(Date.now(), {
      days: 1,
    }),
  },
  {
    id: uuid(),
    title: 'Project has been approved',
    type: 'project',
    created_at: sub(Date.now(), {
      days: 3,
    }),
  },
  {
    id: uuid(),
    title: 'New feature has been added',
    type: 'feature',
    created_at: sub(Date.now(), {
      days: 7,
    }),
  },
];

export default notificationsMockData;

export type INotification = {
  id: string;
  title: string;
  type: string;
  created_at: Date;
};
