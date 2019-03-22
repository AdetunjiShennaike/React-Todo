import React from 'react'
import './Todo.css'


function ListItem(props) {
  return (
    <div className={`list-items${props.toDoProp.completed ? ' completed' : ''}`} onClick={() => props.toggleCompleted(props.toDoProp.id)}>
      <p>{props.toDoProp.task}</p>
      {/* {props.toDoProp.id} */}
      {/* {props.toDoProp.completed} */}
    </div>
  )
}

export default ListItem