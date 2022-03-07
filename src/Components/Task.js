import React, { Component } from "react";

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '30px',
            color: this.props.task.done ? 'blue': 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render() {
        const {task} = this.props;

        return <div style={this.StyleCompleted()}> 
            {task.id} --
            {task.title} --
            {task.description}--
            {task.done}
            <input 
            type="checkbox" 
            onChange={this.props.checkDone.bind(this, task.id)}
            />
            <button
            style={btnDelete}
            onClick={this.props.deleteTask.bind(this, task.id)}
            >
                x
            </button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px'
}

export default Task;