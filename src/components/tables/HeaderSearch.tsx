import React from 'react';
import { Search as SearchIcon } from 'react-feather';

import { useDebouncedCallback } from 'use-debounce';

import {
  Box,
  SvgIcon,
  InputAdornment,
  makeStyles,
  TextField,
  TextFieldProps,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: theme.palette.background.default,
  },

  cardHeaderContainer: {
    padding: 16,
    minHeight: 56,
    display: 'flex',
  },

  boxSeparator: {
    flexGrow: 1,
  },

  searchInput: {
    maxWidth: 500,
    width: '100%',
  },
}));

type IParams = TextFieldProps & {
  onInputChange?: (text: string) => void;
  loadingSearch?: boolean;
};

const HeaderSearch: React.FC<IParams> = (props) => {
  const { onInputChange, loadingSearch, ...rest } = props;
  const classes = useStyles();

  const debouncedSearchText = useDebouncedCallback((value: string) => {
    if (onInputChange) {
      onInputChange(value);
    }
  }, 1000);

  return (
    <Box className={classes.cardHeaderContainer}>
      <Box className={classes.boxSeparator} />
      <TextField
        className={classes.searchInput}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon fontSize="small" color="action">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
          endAdornment: loadingSearch && (
            <InputAdornment position="end">
              <CircularProgress size={22} color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search"
        variant="outlined"
        {...rest}
        onChange={(e) => debouncedSearchText.callback(e.target.value)}
      />
    </Box>
  );
};

export default HeaderSearch;
