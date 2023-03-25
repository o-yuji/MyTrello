import React from 'react';
import { v4 as uuid } from 'uuid';

const TaskAddInput = ({inputText,setInputText,taskList,setTaskList}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      const taskId = uuid();
      setTaskList([
        ...taskList,
        {
          id: taskId,
          draggableId:`task-${taskId}`,
          text: inputText,
        },
      ]);
      setInputText("");
    }
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Add a task"
          className="taskAddInput"
        />
      </form>
    </div>
  )
}

export default TaskAddInput