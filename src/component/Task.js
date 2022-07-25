import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

const Task = (props) => {
  return (
    <Stack direction="row" spacing={4}>
      <Typography variant="h6">{props.data.task}</Typography>
      {props.data.task && (
        <Button
          variant="contained"
          onClick={() => props.deleteItem(props.data.id)}
        >
          delete
        </Button>
      )}
    </Stack>
  );
};
export default Task;
