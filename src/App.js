import "./styles.css";
import { useReducer } from "react";
import { AddTask, List } from "./component";
import reducer from "./reducer";

export default function App() {
  const intialState = [];
  const [state, dispatch] = useReducer(reducer, intialState);

  const addItems = (event, item) => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  return (
    <div className="App">
      <h1>To Do list</h1>
      <AddTask addItem={addItems} />
      <List todoList={state} deleteItem={deleteItem} />
    </div>
  );
}
