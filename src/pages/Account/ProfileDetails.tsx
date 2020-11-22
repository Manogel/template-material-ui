import React, { useState } from 'react';

import clsx from 'clsx';
import * as Yup from 'yup';

import MyButton from '@components/MyButton';
import Input from '@components/MyInput';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '@utils/getValidationErrors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  card: {
    backgroundColor: theme.palette.background.default,
  },
}));

interface IFormData {
  email: string;
  password: string;
}

type IParams = IDivParams & {
  className?: string;
};

const ProfileDetails = ({ className, ...rest }: IParams) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA',
  });
  const formRef = React.useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async (data) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um email válido')
          .required('E-mail obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  };

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Form onSubmit={handleSubmit} ref={formRef} initialData={values}>
        <Card className={classes.card}>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Input
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Input label="Last name" name="lastName" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Input label="Email Address" name="email" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Input label="Phone Number" name="phone" type="number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Input label="Country" name="country" />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    label="Age"
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <MyButton
              color="primary"
              variant="contained"
              fullWidth={false}
              type="submit"
            >
              Save details
            </MyButton>
          </Box>
        </Card>
      </Form>
    </div>
  );
};

export default ProfileDetails;
