import { Button, Checkbox, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import LoginPageSVG from '../../images/LoginPageSVG';
import Logo from '../../images/Logo';

const LoginPage = () => {
  const classes = useStyles();
  const [mailFocus, setMailFocus] = React.useState('none');
  const setFocused = name => {
    if (name === 'mail') {
      setMailFocus('mail');
    } else {
      setMailFocus('name');
    }
  };
  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      justifyContent="center"
    >
      <Grid direction="column" className={classes.left}>
        <div className={classes.logoBox}>
          <Logo className={classes.logo} />
        </div>
        <div className={classes.inputFieldsContainer}>
          <Typography className={classes.welcomeText} variant="h1">
            welcome back
          </Typography>
          <Typography variant="h6" className={classes.welcomeMessage}>
            Thank you for getting back to us,please login to your account by
            filling this form:
          </Typography>
          <Grid direction="column">
            <div
              className={
                mailFocus === 'mail'
                  ? classes.inputWrapFocused
                  : classes.inputWrap
              }
            >
              <Typography variant="body1" className={classes.email}>
                Email Address
              </Typography>
              <input
                onFocus={() => setFocused('mail')}
                className={classes.inputFieldEmail}
              />
            </div>
            <div
              className={
                mailFocus === 'name'
                  ? classes.inputWrapFocusedName
                  : classes.inputWrapName
              }
            >
              <Typography variant="body1" className={classes.email}>
                Password
              </Typography>
              <input
                type="password"
                autoComplete="new-password"
                required
                onFocus={() => setFocused('name')}
                className={classes.inputFieldEmail}
              />
            </div>
            <Grid
              className={classes.checkBoxContainer}
              container
              direction="row"
            >
              <Checkbox
                defaultChecked
                classes={{ root: classes.checkBox }}
                size="medium"
              />
              <Typography className={classes.checkBoxLabel} variant="body1">
                Remember me
              </Typography>
              <a href="*">
                <Typography className={classes.forgotPassword} variant="body1">
                  Forgot Passowrd
                </Typography>
              </a>
            </Grid>
            <Grid
              direction="row"
              container
              className={classes.ButtonContainer}
              justifyContent="center"
              alignItems="center"
            >
              <>
                <Button color="secondary" className={classes.loginButton}>
                  LOGIN
                </Button>
                <Button className={classes.signUpButton}>SIGN UP</Button>
              </>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid
        direction="column"
        className={classes.right}
        container
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <LoginPageSVG className={classes.LoginPageSVG} />
      </Grid>
    </Grid>
  );
};
export default LoginPage;
