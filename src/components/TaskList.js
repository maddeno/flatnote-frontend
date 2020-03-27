import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Note from './Note'


class TaskList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      showNewNoteForm: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/tasks')
    .then(resp => resp.json())
    .then(taskData => this.setState({
      tasks: taskData
    }))
  }

  handleClick = (taskId) => {
    this.props.showForm(taskId)
  }

  updateNote = (noteToUpdate) => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: noteToUpdate,
        status: 'done'
      })
    }
    fetch(`http://localhost:3000/notes/${noteToUpdate}`, reqObj)
    .then(resp => resp.json())
    .then(respObj => {this.props.updateNotesArray()}) 
  }

  deleteNote = (noteToDelete) => {
    const reqObj = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch(`http://localhost:3000/notes/${noteToDelete}`, reqObj)
    .then(resp => resp.json())
    .then(respObj => {this.props.updateNotesArray()}) 
  }


  render () {
    return (
      <div>
        <h2>Here are your current notes:</h2>
        {this.state.tasks.map(task => {
          return <ul>
            <h3>
              {task.category}
            </h3>
            {this.props.notes.filter(note => {
            return note.task_id === task.id
          }).map(filteredNote => {
            return <li>
              <Note deleteNote={this.deleteNote} updateNote={this.updateNote} note={filteredNote}/>
            </li>

          })}
          <li>
            <button onClick={() => this.handleClick(task.id)}>+ new {task.category} note</button>
          </li>
          </ul>
        })}
        
      </div>

    )
  }


}

export default TaskList
