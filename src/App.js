import './styles.css';
import { useReducer } from 'react';
import { AddTask, List } from './component';
import reducer from './reducer';
import { Typography, Stack } from '@mui/material';

export default function App() {
  const intialState = [];
  const [state, dispatch] = useReducer(reducer, intialState);

  const addItems = (event, item) => {
    event.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: item });
  };
  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };
  return (
    <Stack spacing={4} alignItems="center" justifyContent="center">
      <Typography variant="h3">To Do list</Typography>
      <AddTask addItem={addItems} />
      <List todoList={state} deleteItem={deleteItem} />
    </Stack>
  );
}
