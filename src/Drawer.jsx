import React from 'react';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles(() => ({
  list: {
    width: 215 
  }
}));

const ListItemLink = React.forwardRef((itemProps, ref) => (
  <Link to='/add' {...itemProps} innerRef={ref} />
));

const Drawer = () => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        {['Add a subject'].map((text, index) => (
          <ListItem button key={text} component={ListItemLink}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Drawer;