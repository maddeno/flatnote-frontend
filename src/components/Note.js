import React from 'react'

const Note = (props) => {
  return (
    <div>
        {props.note.description} - Urgency: {props.note.urgency} - Status: {props.note.status} - Date: {props.note.date} - Time: {props.note.time}   
        <button>Mark as Done</button>  <button>Delete Note</button>
    </div>
  )
}

export default Note