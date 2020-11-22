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
  topic?: string;
  rightButtonTitle?: string;
  rightButtonProps?: ButtonProps;
  importExport?: boolean;
};

const HeaderSample: React.FC<IParams> = (props) => {
  const {
    title,
    topic,
    rightButtonProps,
    rightButtonTitle,
    importExport,
  } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="space-between">
      <Grid item>
        {!!topic && (
          <Typography component="h2" gutterBottom variant="overline">
            {topic}
          </Typography>
        )}
        <Typography component="h1" variant="h3">
          {title}
        </Typography>

        {importExport && (
          <Box marginTop={2}>
            <Button startIcon={<ImportIcon size={18} />}>Importar</Button>
            <Button
              startIcon={<ExportIcon size={18} />}
              className={classes.buttonExport}
            >
              Exportar
            </Button>
          </Box>
        )}
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

export default HeaderSample;
