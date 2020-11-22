import React, { useState } from 'react';

import clsx from 'clsx';

import { IMyButtonProps } from '@components/MyButton/MyButton';
import { Grid, Button, GridProps, InputProps } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Search } from './components';
import { IFilterParams } from './components/Filter/Filter';
import useStyles from './styles';

type IParams = GridProps & {
  className?: string;
  filterComponent?: React.FC<IFilterParams>;
  onFilter?: (filters: string) => void;
  onSearch(value: string): void;
  inputProps?: InputProps;
  buttonProps?: IMyButtonProps;
  loadingSearch?: boolean;
};

const SearchBar = (props: IParams) => {
  const {
    onFilter,
    onSearch,
    className,
    inputProps,
    buttonProps,
    loadingSearch,
    filterComponent: Filter,
    ...rest
  } = props;

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
        {onSearch && (
          <Search
            className={classes.search}
            onSearch={onSearch}
            inputProps={inputProps}
            buttonProps={buttonProps}
            loadingSearch={loadingSearch}
          />
        )}
      </Grid>
      {!!Filter && onFilter && (
        <>
          <Grid item>
            <Button
              className={classes.filterButton}
              color="primary"
              onClick={handleFilterOpen}
              size="small"
              variant="outlined"
            >
              <FilterListIcon className={classes.filterIcon} /> Filtros
            </Button>
          </Grid>

          <Filter
            onClose={handleFilterClose}
            onFilter={onFilter}
            open={openFilter}
          />
        </>
      )}
    </Grid>
  );
};

export default SearchBar;
