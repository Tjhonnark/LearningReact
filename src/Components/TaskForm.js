import React,  { Component } from 'react';

export default class TaskForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Write a Task"/>
                <br/>
                <textarea placeholder="Write descripcion"></textarea>
            </form>
        )
    }
}