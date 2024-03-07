import { useState} from 'react'

const useList  = (initialValue = []) => {

    const[value, setValue] = useState(initialValue);
    
    // Push new value to list
    const push = (element) =>
    {
        setValue((oldValue) => [...oldValue, element])
    }

    // remove value from list(eliminar)
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_,i) => i !== index))
    }

    //TODO: Develop more functions for lists

    // list es vacia ? true / false
    const isEmpty = () => value.length === 0

    return {value, setValue, push, remove, isEmpty}



}

export default useList;