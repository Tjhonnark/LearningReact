import React, { Component } from "react";

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '30px',
            color: this.props.task.done ? 'blue': 'black',
            textDecoration: 'none'
        }
    }

    render() {
        const {task} = this.props;

        return <div style={this.StyleCompleted()}> 
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