import React,  { Component } from 'react';

export default class TaskForm extends Component {
    
    onChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    onSubmit = e => {
        console.log('submiting');
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}> 
                <input 
                type="text" 
                placeholder="Write a Task" 
                onChange={this.onChange} 
                value={this.state.title}
                />
                <br/>
                <textarea 
                placeholder="Write descripcion" 
                onChange={this.onChange}
                value={this.state.description}
                />
                <button type="submit">
                    Enviar perro
                </button>
            </form>
        )
    }
}