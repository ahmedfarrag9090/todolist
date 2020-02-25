import React, { Component } from 'react';
import './list-form.css'

export default class Form extends Component{

    state={
        taskName: ''
    }

    handleChange = (e) => {
        document.getElementsByClassName('enter-value')[0].classList.add('display-none')
        this.setState({
            [e.target.id]: e.target.value
        })
        
      }

      handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.taskName !== '') {

            this.props.addItem(this.state)
        }else{document.getElementsByClassName('enter-value')[0].classList.remove('display-none')}
        this.setState({
            taskName:''
        })
        
      }



    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} >
                    <input value={this.state.taskName} type="text" id="taskName" placeholder="Add your task" onChange={this.handleChange} autoComplete="off"/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}