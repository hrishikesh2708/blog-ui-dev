import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useStyles } from './styles';
import SvgComponent from '../../images/Logo';

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <SvgComponent className={classes.logo} />
          </div>
          <div className={classes.right}>
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              className={classes.btns}
            >
              Home
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              className={classes.btns}
            >
              Blog
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              className={classes.btns}
            >
              Trending
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              size="small"
              className={classes.btns}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
