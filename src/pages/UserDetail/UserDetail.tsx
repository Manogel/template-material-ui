import React from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';

import Page from '@components/Page';
import { Tabs, Tab, Divider } from '@material-ui/core';

import { Header } from './components';
import Invoices from './Invoices';
import Logs from './Logs';
import useStyles from './styles';
import Summary from './Summary';

const tabs = [
  { value: 'summary', label: 'Summary' },
  { value: 'invoices', label: 'Invoices' },
  { value: 'logs', label: 'Logs' },
];

type IRouteParams = {
  id: string;
  tab: string;
};

const UserDetail: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const { id: userId, tab } = params as IRouteParams;
  const handleTabsChange = (_event: any, value: string) => {
    navigate(`/app/users/${userId}/${value}`, { replace: true });
  };

  if (!tab) {
    return <Navigate to="summary" />;
  }

  if (!tabs.find((t) => t.value === tab)) {
    return <Navigate to="/404" />;
  }

  return (
    <Page className={classes.root} title="User Details">
      <Header />

      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map((tabItem) => (
          <Tab
            key={tabItem.value}
            label={tabItem.label}
            value={tabItem.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'summary' && <Summary />}
        {tab === 'invoices' && <Invoices />}
        {tab === 'logs' && <Logs />}
      </div>
    </Page>
  );
};

export default UserDetail;
