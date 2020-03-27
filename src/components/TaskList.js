import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import Note from './Note'
import NewNoteForm from './NewNoteForm'


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

  handleClick = () => {
    this.setState({
      showNewNoteForm: !this.state.showNewNoteForm
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
        console.log(resp)
        return resp.json()
    }).then(respObj => {
        this.props.addNewNote(respObj)
    })    
  }

  render () {
    return (
      <div>
        {this.state.tasks.map(task => {
          return <ul>
            <h3>
              {task.category}
            </h3>
            {this.props.notes.filter(note => {
            return note.task_id === task.id
          }).map(filteredNote => {
            return <li>
              <Note note={filteredNote}/>
            </li>

          })}
          <li>
            <button onClick={() => this.handleClick()}>+ new {task.category} note</button>
          </li>
          {this.state.showNewNoteForm ? <NewNoteForm userId={this.props.currentUser.id} taskId={task.id} createNote={this.createNote}/> : null}
          </ul>
        })}
        
      </div>

    )
  }

  // render () {
  //   return (
  //     <table className="ui celled striped padded table">
  //       <tbody>
  //         <tr>
  //           <th>
  //             <h3 className="ui center aligned header">
  //               {this.state.tasks[0]}
  //             </h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">
  //               {this.state.tasks[1]}
  //             </h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">
  //               {this.state.tasks[2]}
  //             </h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">
  //               {this.state.tasks[3]}
  //             </h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">
  //               {this.state.tasks[4]}
  //             </h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">
  //               {this.state.tasks[5]}
  //             </h3>
  //           </th>
  //         </tr>
  //       </tbody>
  //     </table>
  //   )
  // }

}

export default TaskList
