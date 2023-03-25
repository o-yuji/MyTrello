import React,{useState} from 'react'

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false)
  const [inputCardTitle, setInputCardTitle] = useState("Title")
  
  const handleClick = () => {
    setIsClick((prev) => !prev)
  }

  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false)
  }

  const handleBlur = (e) => {
    setIsClick(false)
  }

  return (
    <div onClick={handleClick}  className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className='taskCardTitleInput'
            autoFocus
            type="text"
            value={inputCardTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength="15"
          />
        </form>
      ) : (
        <h3>
          {inputCardTitle}
        </h3>
      )}
    </div>
  )
}

export default TaskCardTitle
