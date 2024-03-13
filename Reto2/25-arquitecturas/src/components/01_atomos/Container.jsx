import React from 'react'
import './Container.css'

export const Container = ({children, type = ""}) => {
  return (
    <div className={`container ${type}`}>
        {children}
    </div>
    
  )
}
