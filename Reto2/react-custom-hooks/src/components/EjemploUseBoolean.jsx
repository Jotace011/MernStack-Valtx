import React, { useEffect, useState } from 'react'

//useBoolean Hook
const useBoolean = (initialValue) => {

    const [value, setValue] = useState(initialValue);

    const updateValue = useRef({
        toggle: () => setValue(oldValue => !oldValue),
        on: () => setValue(true),
        off: () => setValue(false)
    })

    return[value, updateValue.current]
}

const EjemploUseBoolean = () => {

    const [lista, setLista] = useState([])

    //uso de hook useboolean
    const [cargando, setCargando ] = useBoolean(false)
    const [error, setError ] = useBoolean(false)

    //al iniciar el componente, cargamos la lissta
    useEffect(() => {
        setCargando.on() //cargando = true
        fetch('https://reqres.in/users')
            .then((response) => console.log(response.json))
            .then(setLista)
            .catch((error) => {
                alert(`Ha ocurrido un error: ${error}`)
                setError.on() //error = true
            })
            .finally(() => setCargando.off)
        
    }, [lista, setCargando, setError])



    return(
     <div>
        <p>{cargando ? 'Cargando...' : null}</p>
        <p>{error ? 'Ha ocurrido un error' : null} </p>
     </div>
    )
}


export default EjemploUseBoolean;