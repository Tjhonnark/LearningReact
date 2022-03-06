import React,  { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        title:'',
        description:''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <input 
                type="text"
                name='title' 
                placeholder="Write a Task" 
                onChange={this.onChange} 
                value={this.state.title}
                />
                <br/>
                <textarea 
                name='description'
                placeholder="Write descripcion" 
                onChange={this.onChange}
                value={this.state.description}
                />
                <button type="submit">
                    Enviar, perro
                </button>
            </form>
        )
    }
}