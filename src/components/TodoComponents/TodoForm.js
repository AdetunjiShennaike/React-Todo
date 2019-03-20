import React from 'react'

let ToDoForm = props => {
  return (
    <form>
      <input
        type='text'
        value={props.task}
        name='task'
        placeholder='New Task'
        onChange={props.eventChanges}
      />
      <button onClick={props.updateList}>Add To DO</button>
      <button onClick={props.removeComplete}>Clear Complete</button>
    </form>
  )
}

export default ToDoForm