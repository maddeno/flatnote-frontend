import React, { Component } from 'react'


class NewNoteForm extends Component {
    constructor (props) {
        super (props)
        this.state = {
            task_id: this.props.taskId,
            user_id: this.props.currentUser.id,
            status: 'not done'
        }
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNote(this.state)
    }

    render () {
        return (
            <div>
              <form onSubmit={this.handleSubmit }>
                <input name={'description'} placeholder={'description'} onChange={this.handleChange}/>
                <input name={'urgency'} placeholder={'urgency: 1-5'} onChange={this.handleChange}/>
                <input name={'date'} placeholder={'date'} onChange={this.handleChange}/>
                <input name={'time'} placeholder={'time'} onChange={this.handleChange}/>
                <input type='submit' value='submit'/>
              </form>
            </div>
        );
    }
}

export default NewNoteForm