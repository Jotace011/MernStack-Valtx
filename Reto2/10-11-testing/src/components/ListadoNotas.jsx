import React from 'react'

export const ListadoNotas = ({notas = []}) => {
  return (
    <div className="lista-notas" aria-label='listado-notas'>
        {
            notas.map((nota, i) => <div key={i} >{nota}</div>)
        }

    </div>
  )
}
