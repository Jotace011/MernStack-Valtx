import React from 'react'
import Button from '@material-ui/core/Button';
import  PropTypes  from 'prop-types';

function Boton({text, color="primary"}) {
  return (
    <div>
        <Button variant="contained" color={color}>{text}</Button>
    </div>
  )
}

Boton.prototype = {
    text: PropTypes.string,
    color: PropTypes.oneOf(["primary", "secondary", "warning","success"])
}

export default Boton