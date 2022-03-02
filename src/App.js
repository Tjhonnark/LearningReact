import React, { Component } from 'react';
import './App.css';

import tasks from './Sample/tasks.json';
import Tasks from './Components/Tasks';
import TaskForm from './Components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
        <TaskForm/>
        <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;