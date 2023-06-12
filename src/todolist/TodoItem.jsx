/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png"
import CheckIcon from "../assets/editicon.png"
import "./todo.css"

export const TodoItem = ({title, deleteTodo}) =>{
  const [done, setDone] = useState(false);
  const editBtn = () => {
    setDone(!done);
  };
  return (
    <>
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title" style={{ backgroundColor: done ? "#fc5656" : "white" }}>{title}</p>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
      <img className="todo-one-icon" src={CheckIcon} onClick={editBtn}/>
    </>
  )
}
