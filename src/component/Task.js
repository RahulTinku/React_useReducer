import React from "react";

const Task = (props) => {
  return (
    <div className="task">
      <p>{props.data.task}</p>
      {props.data.task && (
        <button onClick={() => props.deleteItem(props.data.id)}>delete</button>
      )}
    </div>
  );
};
export default Task;
