import React from 'react';

import * as Yup from 'yup';

import Input from '@components/Input';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '@utils/getValidationErrors';

import useStyles from './styles';

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const classes = useStyles();
  const formRef = React.useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IFormData> = async (data) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Informe um email válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
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

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Faça seu login
        </Typography>
        <Form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
          <Input
            required
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Input
            required
            name="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignIn;
