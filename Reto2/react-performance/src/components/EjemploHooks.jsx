import React,{useMemo, useCallback, useState, } from 'react'


// useMemo --> React.memo() --> Funciones creacionales de componentes que deben memorizar algo
// useCallback -->React.useCallback() Memorizar valores listados en la dependencia. Funciones en linea
 
const MiComponente = ({name}) => {
    
    const [name, setName] = useState('')

    const names = [
        'Martin', 
        'Erick'
    ]

    const getName  = useCallback(
        () => {
            //obtenemos nombre aleatorio
            const random = Math.floor(Math.random() * (names.length-1))
            setName()
        },
        [names],
    )

    const clearName  = useCallback(
        () => {
            //obtenemos nombre aleatorio
            setName(null)
        },
        [],
    )



    return(
        <h1>
            Mi Componente
        </h1>
    )
}
