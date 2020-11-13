import React from 'react';
import { Search as SearchIcon } from 'react-feather';

import {
  Box,
  SvgIcon,
  InputAdornment,
  makeStyles,
  TextField,
  TextFieldProps,
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
  //
};

// Apply debounce in input change

const HeaderSearch: React.FC<IParams> = (props) => {
  const classes = useStyles();

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
        }}
        placeholder="Search"
        variant="outlined"
        {...props}
      />
    </Box>
  );
};

export default HeaderSearch;
