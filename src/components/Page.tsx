import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

type IParams = IDivParams & {
  title?: string;
};

const Page = forwardRef<any, IParams>(
  ({ children, title = '', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  },
);

export default Page;
