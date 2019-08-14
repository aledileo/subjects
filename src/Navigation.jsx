import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BackIcon from '@material-ui/icons/ArrowBack';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from './Drawer';
import { subjects } from './db.json';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const [isMenuOpen, setMenu] = useState(false);
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
};

const BackNav = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

export const SubjectNavigation = ({ subjectSlug }) => {
  const classes = useStyles();
  const subjectName = subjects.find(subject => subject.slug === subjectSlug).name;
  
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton 
            component={BackNav}
            to="/"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <BackIcon />
          </IconButton>

          <Typography variant="h6" color="inherit">
            {subjectName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navigation;
