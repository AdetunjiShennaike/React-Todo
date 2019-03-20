// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import ToDoForm from './TodoForm'
import ListItem from './Todo'


let listItem = [
  {
    task: 'Example',
    id: 123456789,
    completed: false
  },
  {
    task: 'Now You Try',
    id: 987654321,
    completed: false
  }
]

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      taskList: listItem,
      task: '',
      id: Date.now(),
      completed: false
    };
  };

  eventChanges = event => {
    console.log('event: ',event.target)

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // removeCompleted = event => {
  //   this.setState({

  //   })
  // }

  updateList = event => {
    event.preventDefault();
    console.log('page')
    let newItem = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };

    this.setState({
      taskList: [this.state.taskList, newItem]
    });
  };


  render() {
    return (
      <div>
        <h1>To Do List Below:</h1>
        <div className='list'>
          {this.state.taskList.map((toDoList, index) => (
            <ListItem key={index} toDoProp={toDoList} />
          ))} 
        </div>

        <ToDoForm
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          eventChanges={this.eventChanges}
          updateList={this.updateList}
          // removeCompleted={this.removeCompleted}
        />
      </div>
    )
  }
}
console.log();

export default TodoList