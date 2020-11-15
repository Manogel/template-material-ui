import React, { useState } from 'react';

import clsx from 'clsx';

import { Grid, Button, GridProps } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Search, Filter } from './components';
import useStyles from './styles';

type IParams = GridProps & {
  className?: string;
  onFilter(filters: string): void;
  onSearch(value: string): void;
};

const SearchBar = (props: IParams) => {
  const { onFilter, onSearch, className, ...rest } = props;

  const classes = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item>
        <Search className={classes.search} onSearch={onSearch} />
      </Grid>
      <Grid item>
        <Button
          className={classes.filterButton}
          color="primary"
          onClick={handleFilterOpen}
          size="small"
          variant="outlined"
        >
          <FilterListIcon className={classes.filterIcon} /> Show filters
        </Button>
      </Grid>
      <Filter
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
      />
    </Grid>
  );
};

export default SearchBar;
