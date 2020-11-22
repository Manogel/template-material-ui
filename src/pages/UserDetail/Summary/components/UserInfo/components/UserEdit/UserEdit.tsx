import React from 'react';

import clsx from 'clsx';
import * as Yup from 'yup';

import MyButton from '@components/MyButton';
import MyInput from '@components/MyInput';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Switch,
  CardProps,
} from '@material-ui/core';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '@utils/getValidationErrors';

import useStyles from './styles';

interface IFormData {
  email: string;
  name: string;
}

type IParams = CardProps & {
  className?: string;
  user?: any;
  onClose?: () => void;
  open?: boolean;
};

const UserEdit = (props: IParams) => {
  const { open, onClose, className, ...rest } = props;
  const classes = useStyles();
  const formRef = React.useRef<FormHandles>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit: SubmitHandler<IFormData> = async (data) => {
    setLoading(true);
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um email válido')
          .required('E-mail obrigatório'),
        name: Yup.string().required('Nome é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
    setLoading(false);
  };

  if (!open) {
    return null;
  }

  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <CardContent>
            <Typography align="center" gutterBottom variant="h3">
              Edit User
            </Typography>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={6} xs={12}>
                <MyInput
                  fullWidth
                  label="Email address"
                  name="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <MyInput
                  fullWidth
                  label="Full name"
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <MyInput
                  fullWidth
                  label="Phone number"
                  name="phone"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <MyInput
                  fullWidth
                  label="State/Region"
                  name="state"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <MyInput
                  fullWidth
                  label="Country"
                  name="country"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <MyInput
                  fullWidth
                  label="Address 1"
                  name="address1"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <MyInput
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
            <MyButton onClick={onClose} variant="contained" disabled={loading}>
              Close
            </MyButton>
            <MyButton
              variant="contained"
              type="submit"
              customColor="success"
              loading={loading}
            >
              Save
            </MyButton>
          </CardActions>
        </Form>
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
