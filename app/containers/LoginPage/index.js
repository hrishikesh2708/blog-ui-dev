import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      justifyContent="center"
    >
      <Grid direction="column" className={classes.left} />
      <Grid direction="column" className={classes.right} />
    </Grid>
  );
};
export default LoginPage;
