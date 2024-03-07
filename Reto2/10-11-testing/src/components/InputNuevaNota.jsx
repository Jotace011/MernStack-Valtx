import React, { useState } from 'react'

export const InputNuevaNota = ({addNuevaNota}) => {

  const [nuevaNota, setNuevaNota] = useState("");

  return (
    <div className='input-nueva-nota' >
      <input type='text' placeholder='Introduce nueva nota' 
            value={nuevaNota}
            onKeyDown={(e) => e.key === 'Enter'  && addNuevaNota(nuevaNota)}
            onChange={ e => setNuevaNota(e.target.value)} />
      <button onClick={() =>  addNuevaNota(nuevaNota) }>
        Añadir
      </button>
    </div>
  )
}
