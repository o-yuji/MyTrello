import React,{useState} from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

const TaskCard = ({taskCardsList,setTaskCardsList,keyid,taskCardList,index}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable
      className="taskCardBox"
      draggableId={taskCardList.id}
      index={index}
    >
      {(provided) => (
        <div
          key={taskCardList.id}
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="taskCardHeader" {...provided.dragHandleProps}>
            
            <TaskCardTitle className="cardTitle" />
            <TaskCardDeleteButton
              index={keyid}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCardList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard