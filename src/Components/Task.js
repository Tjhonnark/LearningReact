import React, { Component } from "react";
import './Task.css'

class Task extends Component {
    render() {
        const {task} = this.props;

        return <div className="red"> 
            {task.id} --
            {task.title} --
            {task.description}--
            {task.done}
            <input type="checkbox"/>
            <button style={btnDelete}>
                x
            </button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px'
}

export default Task;