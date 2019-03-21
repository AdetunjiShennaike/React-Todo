// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import ToDoForm from './TodoForm'
import ListItem from './Todo'
import './toDoList.css'


let taskList = [
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
      taskList,
      task: '',
    };
  };

  eventChanges = event => {
    console.log('event: ',event.target)

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();

    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    let exchange = this.state.taskList.slice();
    
    exchange.push(newItem);

    this.setState({
      taskList: exchange,
      task:''
    });
  };

  toggleCompleted = event => {
    this.setState({
      taskList: this.state.taskList.map(task => {
        console.log(task)
        if (task.id === event) {
          task.completed = !task.completed;
          return task
        }
        else {
          return task
        };
      })
   })    
  }

  removeComplete = event => {
    event.preventDefault();

    // taskList


  }

  render() {
    return (
      <div>
        <h1>To Do List Below:</h1>
        <div className='list'>
          {this.state.taskList.map((toDoList) => (
            <ListItem key={toDoList.id} toDoProp={toDoList} toggleCompleted={this.toggleCompleted} />
          ))} 
        </div>

        <ToDoForm
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          eventChanges={this.eventChanges}
          // toggleCompleted={this.toggleCompleted}
          updateList={this.updateList}
          removeComplete={this.removeComplete}
        />
      </div>
    )
  }
}
console.log();

export default TodoList