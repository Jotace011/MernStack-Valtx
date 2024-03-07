import axios from 'axios';
import React from 'react'

function NotificactionManager() {

    const [title, setTitle] = React.useState("");
    const [message, setMessage] = React.useState("");

    const sendNote = () => axios.post('http://localhost:8000/custom-notification',{
            title,
            message
        }).then(r => console.log(r)).catch(e => console.log(e));
    

  return (
    <>
        <h1> Te doy la bienvenida al gestor de notis</h1>
        <div style={{display: 'flex', flexDirection:'column', gap:10}}>
            <input type='text' placeholder='Aqui viene el titutlo ' value={title} onChange={ e => setTitle(e.target.value) } />
            <textarea placeholder='Aqui debes escribir tu mensaje' value={message} onChange={ e => setMessage(e.target.value) } ></textarea>
            <button onClick={sendNote}>Enviar notificacion</button>
        </div>  
    </>
  )
}

export default NotificactionManager