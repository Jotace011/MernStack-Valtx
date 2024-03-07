/**
 * 
 * La funcion suma devuelve la suma de a + b
 * 
 * @param {number} a - El primer numero a sumar
 * @param {number} b - EL segundo numero a sumar
 * @returns {number} - Suma de a + b
 */

const suma = (a, b = 5) => a + b;


/**
 * Funcion para añadir item nuevo al final de un array
 * 
 * @param {object[]} array - El array inicial
 * @param {object} item - El nuevo item que queremos introducir en el array inicial
 * @returns {object[]} - Devuelve un array de objetos
 */

const pushArray = (array, item) => [...array, item]
