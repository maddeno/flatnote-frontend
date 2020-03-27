import React from 'react'

const Note = (props) => {
  return (
    <div>
        {props.note.description} - Urgency: {props.note.urgency} - Status: {props.note.status} - Date: {props.note.date} - Time: {props.note.time} - {props.note.status === 'done' ? <span>Done&#10004;</span> : null}   
        {props.note.status === 'done' ? null : <button onClick={() => props.updateNote(props.note.id)}>Mark as Done</button> } <button onClick={() => props.deleteNote(props.note.id)}>Delete Note</button>
    </div>
  )
}

export default Note