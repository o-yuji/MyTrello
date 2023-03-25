import React from 'react'
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faTrashCan,
  } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task,taskList,setTaskList,index }) => {

  const handleDelete = (id) => {
    // console.log(id)
    const newTaskList = taskList.filter((el) => {
      return el.id !== id
    })
    setTaskList(newTaskList)
  }

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText" >{task.text}</p>
          <button className="taskTrashButton" onClick={()=>handleDelete(task.id)}>
            <FontAwesomeIcon icon={faTrashCan} size="2xl" />
          </button>
        </div>
      )}

    </Draggable>
  )
}

export default Task