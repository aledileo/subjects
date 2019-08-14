import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import ChangeMarkDialog from './ChangeMarkDialog';
import Dialog from '@material-ui/core/Dialog';
import { subjects } from './db.json';

const examList = ["1er Parcial", "2do Parcial", "Trabajo Practico", "Recuperatorio", "Final"];

const useStyles = makeStyles(theme => ({
  text: {
    margin: theme.spacing(0, 2)
  },
  listItem: {
    margin: theme.spacing(1, 0)
  }
}));

const Subject = ({ subjectSlug }) => {
  const classes = useStyles();
  const [isDialogOpen, setDialog] = useState(false);
  const [examToEdit, setExamToEdit] = useState(null);
  const marks = subjects.find(subject => subject.slug === subjectSlug).marks;

  const openDialog = (exam) => {
    setExamToEdit(exam);
    setDialog(true);
  }
  const closeDialog = () => {
    setDialog(false);
    setExamToEdit(null);
  }

  return (
    <List>
      {examList.map((exam, index) => (
        <ListItem key={exam} className={classes.listItem} onClick={() => openDialog(exam)}>
          <ListItemText primary={exam} />
          <ListItemSecondaryAction>
            <ListItemText className={classes.text} primary={marks[index] || 'N/A'} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Divider />
      <ListItem className={classes.listItem}>
        <ListItemText>Promedio</ListItemText>
        <ListItemSecondaryAction>
          <ListItemText className={classes.text} primary={4} />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <ChangeMarkDialog event={examToEdit}/>
      </Dialog>
    </List>
  );
} 

export default Subject;