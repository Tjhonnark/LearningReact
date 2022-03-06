import React, { Component } from 'react';
import './App.css';

import tasks from './Sample/tasks.json';
import Tasks from './Components/Tasks';
import TaskForm from './Components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return <div>
        <TaskForm addTask={this.addTask}/>
        <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;