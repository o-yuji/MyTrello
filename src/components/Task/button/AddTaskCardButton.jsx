import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const itemId = uuidv4();
    setTaskCardsList([
      ...taskCardsList,
      {
        id: itemId,
        draggableId: `item_${itemId}`,
      }])
  }
  return (
    <div className="addTaskCardButtonAreas">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton