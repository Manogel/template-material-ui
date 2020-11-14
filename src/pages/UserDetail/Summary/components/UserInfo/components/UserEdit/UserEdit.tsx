import React from 'react';

import clsx from 'clsx';

import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Switch,
  Button,
  CardProps,
} from '@material-ui/core';

import useStyles from './styles';

type IParams = CardProps & {
  className?: string;
  user?: any;
  onClose?: () => void;
  open?: boolean;
};

const UserEdit = (props: IParams) => {
  const { open, onClose, user, className, ...rest } = props;

  const classes = useStyles();

  if (!open) {
    return null;
  }

  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <form>
          <CardContent>
            <Typography align="center" gutterBottom variant="h3">
              Edit User
            </Typography>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email address"
                  name="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Full name"
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone number"
                  name="phone"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="State/Region"
                  name="state"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Address 1"
                  name="address1"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Address 2"
                  name="address2"
                  variant="outlined"
                />
              </Grid>
              <Grid item />
              <Grid item md={6} xs={12}>
                <Typography variant="h5">Email Verified</Typography>
                <Typography variant="body2">
                  Disabling this will automatically send the user a verification
                </Typography>
                <Switch color="secondary" edge="start" name="verified" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5">Discounted Prices</Typography>
                <Typography variant="body2">
                  This will give the user discountedprices for all products
                </Typography>
                <Switch
                  color="secondary"
                  edge="start"
                  name="discountedPrices"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button onClick={onClose} variant="contained">
              Close
            </Button>
            <Button
              className={classes.saveButton}
              onClick={onClose}
              variant="contained"
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

UserEdit.displayName = 'UserEdit';

UserEdit.defaultProps = {
  open: false,
  onClose: () => {
    //
  },
};

export default UserEdit;
