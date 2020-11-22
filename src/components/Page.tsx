import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

import LoadingPage from './LoadingPage';

type IParams = IDivParams & {
  title?: string;
  loading?: boolean;
};

const Page = forwardRef<any, IParams>((props, ref) => {
  const { children, title = '', loading, ...rest } = props;

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

export default Page;
