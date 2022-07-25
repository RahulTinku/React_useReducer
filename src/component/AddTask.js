import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function AddTask({ addItem }) {
  const formData = {
    id: '',
    task: '',
    isDone: false,
  };
  const [formValue, setFormValue] = React.useState(formData);

  const handleChange = (e) => {
    e.preventDefault();
    setFormValue((prevData) => ({
      ...prevData,
      id: uuidv4(),
      task: e.target.value,
      isDone: false,
    }));
  };

  const handleClick = (event) => {
    setFormValue(formData);
    addItem(event, formValue);
  };
  return (
    <>
      <form>
        <Stack spacing={4} direction="row">
          <TextField
            type="text"
            value={formValue.task}
            size="small"
            label="Add Item"
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={(event) => handleClick(event)}
          >
            Add Task
          </Button>
        </Stack>
        {/* <button onClick={(event) => handleClick(event)}>Add Task</button> */}
      </form>
    </>
  );
}
