import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList,taskCard }) => {
  const taskCardListDelete = (key) => {
    const newTaskCardsList = taskCardsList.filter((taskCardList) => (
      taskCardList.id !== key
    ))
    setTaskCardsList(newTaskCardsList)
  }

  return (
    <div>      
      <button onClick={() => taskCardListDelete(taskCard.id)}>
        <FontAwesomeIcon icon={faCircleXmark} size="xl" />
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
