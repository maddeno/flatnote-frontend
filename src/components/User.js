import React, { Component } from 'react'
import TaskList from './TaskList'
import NewNoteForm from './NewNoteForm'

class User extends Component {
    constructor (props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            notes: [],
            showForm: false,
            formTaskId: null
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

    showForm = (taskId) => {
        this.setState({
            showForm: !this.state.showForm,
            formTaskId: taskId
        })
    }

    createNote = (newNoteObj) => {
        console.log(newNoteObj)
        const reqObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newNoteObj)
        }
        console.log(reqObj)
        fetch(`http://localhost:3000/notes`, reqObj)
        .then(resp => {
            return resp.json()
        }).then(respObj => {
            this.addNewNote(respObj)
        })
        this.showForm()   
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
                {this.state.showForm ? <NewNoteForm createNote={this.createNote} currentUser={this.state.currentUser} taskId={this.state.formTaskId} /> : <TaskList showForm={this.showForm} notes={this.state.notes} addNewNote={this.addNewNote} />}
            </div>
        )
    }
}

export default User