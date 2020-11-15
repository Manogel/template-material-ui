import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import clsx from 'clsx';

import useStyles from './styles';

interface IParams {
  className?: string;
  onPageChange(page: number): void;
  pageCount: number;
  pageRangeDisplayed?: number;
  reactPaginateProps?: ReactPaginateProps;
}

const Paginate = (props: IParams) => {
  const {
    pageCount,
    pageRangeDisplayed = 5,
    onPageChange,
    className,
    reactPaginateProps,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <ReactPaginate
      activeClassName={classes.active}
      activeLinkClassName={classes.activeLink}
      breakClassName={classes.break}
      breakLabel="..."
      breakLinkClassName={classes.breakLink}
      containerClassName={clsx(classes.root, className)}
      disabledClassName={classes.disabled}
      marginPagesDisplayed={2}
      nextClassName={classes.next}
      nextLabel="next"
      nextLinkClassName={classes.nextLink}
      onPageChange={({ selected }) => onPageChange(selected)}
      pageClassName={classes.page}
      pageCount={pageCount}
      pageLinkClassName={classes.pageLink}
      pageRangeDisplayed={pageRangeDisplayed}
      previousClassName={classes.previous}
      previousLabel="previous"
      previousLinkClassName={classes.previousLink}
      // subContainerClassName="pages pagination"
      {...rest}
      {...reactPaginateProps}
    />
  );
};

export default Paginate;
