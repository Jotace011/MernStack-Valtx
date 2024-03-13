import React from 'react'

const Notes = ({notes}) => {
  return (
    <div>
        Lista de notas
        <ul className='notes-list'>
            {
                notes.map((note, i) => (<li key={i}>{note.note}</li>)) 
            }
        </ul>
    </div>
  )
}

export default Notes