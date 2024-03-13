import React from 'react'
import './Button.css'

const Button = ({color = "blue"}) => {
  return (
    <>
      <button className={`btn ${color}`}>
        Boton
      </button>
    </>
    
  )
}

export default Button