import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTask({ addItem }) {
  const formData = {
    id: "",
    task: "",
    isDone: false
  };
  const [formValue, setFormValue] = React.useState(formData);

  const handleChange = (e) => {
    e.preventDefault();
    setFormValue((prevData) => ({
      ...prevData,
      id: uuidv4(),
      task: e.target.value,
      isDone: false
    }));
  };

  const handleClick = (event) => {
    setFormValue(formData);
    addItem(event, formValue);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add Item"
          value={formValue.task}
          onChange={handleChange}
        />
        <button onClick={(event) => handleClick(event)}>Add Task</button>
      </form>
    </>
  );
}
