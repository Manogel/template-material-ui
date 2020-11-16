import { subDays } from 'date-fns';
import { v4 as uuid } from 'uuid';

const logsData = [
  {
    id: uuid(),
    status: 200,
    method: 'POST',
    route: '/api/purchase',
    desc: 'Purchase',
    IP: '84.234.243.42',
    created_at: subDays(Date.now(), 2),
  },
  {
    id: uuid(),
    status: 522,
    error: 'Invalid credit card',
    method: 'POST',
    route: '/api/purchase',
    desc: 'Purchase',
    IP: '84.234.243.42',
    created_at: subDays(Date.now(), 3),
  },
  {
    id: uuid(),
    status: 200,
    method: 'DELETE',
    route: '/api/products/d65654e/remove',
    desc: 'Cart remove',
    IP: '84.234.243.42',
    created_at: subDays(Date.now(), 4),
  },
  {
    id: uuid(),
    status: 200,
    method: 'GET',
    route: '/api/products/d65654e/add',
    desc: 'Cart add',
    IP: '84.234.243.42',
    created_at: subDays(Date.now(), 5),
  },
];

export default logsData;
