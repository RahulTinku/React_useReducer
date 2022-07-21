import React from "react";
import Task from "./Task";

export default function List({ todoList, deleteItem }) {
  const listItems = todoList.map((item, index) => (
    <Task key={index} data={item} deleteItem={deleteItem} />
  ));
  return listItems;
}
