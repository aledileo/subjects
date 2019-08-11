import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';

const subjectsList = [
  ['Arquitectura', 'Introduccion a Objetos', 'Programacion 3'],
  ['Sistemas operativos', 'Telecomunicaciones', 'Procesos'],
  ['Sistemas operativos', 'Telecomunicaciones', 'Procesos'],
  ['Sistemas operativos', 'Telecomunicaciones', 'Procesos']
]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 720
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  }
}));

const Subjects = () => {
  const classes = useStyles();
  return (
    <List className={classes.root} subheader={<li/>}>
      {[1, 2, 3, 4].map((quarter, index) => (
        <li key={`quarter-${quarter}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader disableSticky>
              {`Quarter ${quarter}`}
            </ListSubheader>
            <Divider component='li' />
            {subjectsList[index].map(subject => (
              <Fragment key={`subject-${subject}`}>
                <ListItem alignItems='flex-start'>
                  <ListItemText 
                    primary={subject}
                    secondaryTypographyProps={{ display: 'block'}}
                    secondary={
                      <Fragment>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          Lunes - 18.30 a 22.30
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          Aula 101
                        </Typography>
                      </Fragment>
                    }
                  />
                  <ListItemSecondaryAction>
                    <Fragment>
                        <Typography
                          variant="body2"
                          align="right"
                        >
                          1er parcial
                        </Typography>
                        <Typography
                          variant="body2"
                          align="right"
                        >
                          12/3/19
                        </Typography>
                      </Fragment>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider component='li' />
              </Fragment>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

export default Subjects;