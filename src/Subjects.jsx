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
import { navigate } from '@reach/router';
import { subjects } from "./db.json";

const subjectsList = [ subjects ]

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
      {subjectsList.map((quarter, index) => (
        <li key={`quarter-${index + 1}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader disableSticky>
              {`Quarter ${index + 1}`}
            </ListSubheader>
            <Divider component='li' />
            {quarter.map(subject => (
              <Fragment key={`subject-${subject.slug}`}>
                <ListItem alignItems='flex-start' onClick={() => navigate(`/subject/${subject.slug}`)}>
                  <ListItemText 
                    primary={subject.name}
                    secondaryTypographyProps={{ display: 'block'}}
                    secondary={
                      <Fragment>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          {`${subject.day} - ${subject.period}`}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                        >
                          {`Aula ${subject.classroom} - ${subject.teacher}`}
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