import React from 'react';
import { Upload as ImportIcon, Download as ExportIcon } from 'react-feather';

import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  ButtonProps,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
  buttonExport: {
    marginLeft: 10,
  },
}));

type IParams = {
  title: string;
  rightButtonTitle?: string;
  rightButtonProps?: ButtonProps;
};

const HeaderPage: React.FC<IParams> = (props) => {
  const { title, rightButtonProps, rightButtonTitle } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="space-between">
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          {title}
        </Typography>

        {/* <Box marginTop={2}>
          <Button startIcon={<ImportIcon size={18} />}>Importar</Button>
          <Button
            startIcon={<ExportIcon size={18} />}
            className={classes.buttonExport}
          >
            Exportar
          </Button>
        </Box> */}
      </Grid>
      {!!rightButtonTitle && (
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddIcon />}
            {...rightButtonProps}
          >
            {rightButtonTitle}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default HeaderPage;
