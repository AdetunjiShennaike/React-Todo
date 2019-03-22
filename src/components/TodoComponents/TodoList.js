// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import ToDoForm from './TodoForm'
import ListItem from './Todo'
import './TodoList.css'

let stored = window.localStorage

let taskList

if (JSON.parse(stored.getItem('exchange'))){
  taskList = JSON.parse(stored.getItem('exchange'))
}
else{
  taskList = [
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
}

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

    stored.setItem('exchange', JSON.stringify(exchange))

    this.setState({
      taskList: JSON.parse(stored.getItem('exchange')),
      // taskList: exchange,
      task:''
    });
  };

  toggleCompleted = event => {
    let exchange = this.state.taskList.map(task => {
      if (task.id === event) {
        task.completed = !task.completed;
        return task
      }
      else {
        return task
      };
    })
    this.setState({
      taskList: exchange     
   })   
  }

  removeComplete = event => {
    event.preventDefault();

    let exchange = this.state.taskList.filter(task => 
      task.completed === false      
    )

    stored.setItem('exchange', JSON.stringify(exchange))

    this.setState({
      taskList: JSON.parse(stored.getItem('exchange')),
    })

  }

  render() {
    console.log(taskList)
    return (
      <div className='container'>
        <div className='search'>
        
        </div>
        <div className='list-holder'>
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
            className='form'
          />
        </div>
      </div>
    )
  }
}
console.log();

export default TodoList