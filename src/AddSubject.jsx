import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  textField: {
    margin: theme.spacing(1, 2),
  }
}));

const initialState = {
  name: '',
  classroom: '',
  teacher: ''
};

const inputReducer = (state, newState) => ({ ...state, ...newState });

const AddSubject = () => {
  const [userInput, setUserInput] = useReducer(inputReducer, initialState);
  const classes = useStyles();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInput({ [name]: value });
  };
  return (
    <form autoComplete="off" className={classes.container}>
        <TextField
          name="name"
          label="Name"
          className={classes.textField}
          value={userInput.name}
          onChange={handleChange}
          fullWidth
        />
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            name="date"
            className={classes.textField}
            value={userInput.date}
            onChange={handleChange}
            autoOk
          />
        </MuiPickersUtilsProvider> */}
        <TextField
          label="Classroom"
          name="classroom"
          className={classes.textField}
          value={userInput.classroom}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Teacher"
          name="teacher"
          className={classes.textField}
          value={userInput.teacher}
          onChange={handleChange}
          fullWidth
        />
        <FormControlLabel
          className={classes.textField} 
          control={
            <Checkbox name="promotion" value={userInput.promotion} />
          }
          label="Direct promotion"
        />
        <Button variant="contained" className={classes.textField} fullWidth>
          Add Subject
        </Button>
      </form>
  );
};

export default AddSubject;