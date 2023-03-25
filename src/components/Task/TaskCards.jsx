import React,{useState} from 'react';
import AddTaskCardButton from "./button/AddTaskCardButton";
import TaskCard from './TaskCard';
import { DragDropContext, Droppable,} from "react-beautiful-dnd";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{ id: "0", draggableId: "item_0" }]);
  
  const reorder = (list,startIndex,endIndex) => {
    const remove = list.splice(startIndex, 1);
    list.splice(endIndex, 0, remove[0])
  }

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppabe" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCardList,index) => (
              <TaskCard
                  key={taskCardList.id}
                  index={index}
                  keyid={taskCardList.id}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                  taskCardList={taskCardList}
                />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards