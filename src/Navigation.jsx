import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Location, navigate } from '@reach/router'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BackIcon from '@material-ui/icons/ArrowBack';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from './Drawer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const [isMenuOpen, setMenu] = useState(false);
  const backHandler = () => { 
    setMenu(false);
    navigate('/');
  }

  return (
    <Location>
    {({location}) => {
      if (location.pathname !== '/') {
        return (
          <div className={classes.root}>
            <AppBar position="sticky" color="primary">
              <Toolbar>
                <IconButton 
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={backHandler}
                >
                  <BackIcon />
                </IconButton>

                <Typography variant="h6" color="inherit">
                  Add Subjects
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        )
      } else {
        return (
          <Fragment>
            <div className={classes.root}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <IconButton 
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setMenu(true)}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Typography variant="h6" color="inherit">
                    Subjects
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
            <SwipeableDrawer 
              open={isMenuOpen}
              onClose={() => setMenu(false)}
              onOpen={() => setMenu(true)}
            >
              <Drawer/>
            </SwipeableDrawer>
          </Fragment>
        );
      }
    }}
    </Location>
  );
};

export default Navigation;
