import React, { Component } from 'react'
import TaskList from './TaskList'

class User extends Component {
    constructor (props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            notes: []
        }
    }

    componentDidMount() {
        console.log('got here!')
        fetch(`http://localhost:3000/users/${this.state.currentUser.id}/get_notes`)
        .then(resp => resp.json())
        .then(noteData => this.setState({
            notes: noteData
        }))
    }

    addNewNote = () => {
        fetch(`http://localhost:3000/users/${this.state.currentUser.id}/get_notes`)
        .then(resp => resp.json())
        .then(noteData => this.setState({
            notes: noteData
        }))
    }


    render () {
        return (
            <div>
                <h1>Hello, {this.state.currentUser.username}!</h1>
                <h2>Here are your current notes:</h2>
                <TaskList notes={this.state.notes} currentUser={this.state.currentUser} createNote={this.createNote} addNewNote={this.addNewNote} />
            </div>
        )
    }
}

export default User