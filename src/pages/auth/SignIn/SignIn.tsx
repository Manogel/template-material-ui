import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import FacebookIcon from '@assets/icons/Facebook';
import GoogleIcon from '@assets/icons/Google';
import MyButton from '@components/MyButton';
import Input from '@components/MyInput';
import Page from '@components/Page';
import { useAuth } from '@contexts/auth';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '@utils/getValidationErrors';

import useStyles from './styles';

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();
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

      await signIn(data);
      navigate('/app/dashboard', { replace: true });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  };

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Box mb={3}>
              <Typography color="textPrimary" variant="h2">
                Entrar
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Faça login na plataforma interna
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  color="primary"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  size="large"
                  variant="contained"
                >
                  Entrar com facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                >
                  Entrar com o google
                </Button>
              </Grid>
            </Grid>
            <Box mt={3} mb={1}>
              <Typography align="center" color="textSecondary" variant="body1">
                ou faça login com seu email e senha
              </Typography>
            </Box>
            <Input
              required
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              margin="normal"
            />
            <Input
              required
              name="password"
              label="Senha"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />

            <Box my={2}>
              <MyButton
                type="submit"
                loading={loading}
                variant="contained"
                fullWidth
              >
                Entrar
              </MyButton>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Ainda não tem uma conta?{' '}
              <Link component={RouterLink} to="/register" variant="h6">
                Cadastre-se
              </Link>
            </Typography>
          </Form>
        </Container>
      </Box>
    </Page>
  );
};

export default SignIn;
