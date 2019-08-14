import React, { Fragment, useState} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

const ChangeMarkDialog = ({ event = " " }) => {
  const [mark, setMark] = useState("");
  const handleInput = event => setMark(Number(event.target.value))
  return (
    <Fragment>
      <DialogTitle>{event}</DialogTitle>
      <DialogContent>
        <FormControl>
          <InputLabel htmlFor="age-simple">Mark</InputLabel>
          <Select
            value={mark}
            onChange={handleInput}
            style={{ minWidth: 120 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button>Submit</Button>
      </DialogActions>
    </Fragment>
  );
}

export default ChangeMarkDialog;