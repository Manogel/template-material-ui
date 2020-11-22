import React from 'react';

import clsx from 'clsx';

import MyButton from '@components/MyButton';
import { IMyButtonProps } from '@components/MyButton/MyButton';
import { Paper, Input, InputProps } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

type IParams = IDivParams & {
  className?: string;
  onSearch(text: string): void;
  loadingSearch?: boolean;
  inputProps?: InputProps;
  buttonProps?: IMyButtonProps;
};

const Search = (props: IParams) => {
  const {
    onSearch,
    className,
    inputProps,
    loadingSearch,
    buttonProps,
    ...rest
  } = props;
  const [search, setSearch] = React.useState('');
  const classes = useStyles();

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search"
          disabled={loadingSearch}
          {...inputProps}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>
      <MyButton
        className={classes.searchButton}
        type="button"
        fullWidth={false}
        onClick={handleSearch}
        loading={loadingSearch}
        customColor="success"
        variant="contained"
        {...buttonProps}
      >
        {buttonProps?.children || 'Search'}
      </MyButton>
    </div>
  );
};

export default Search;
