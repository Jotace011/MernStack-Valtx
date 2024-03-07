import { sumar, restar, multiplicar, dividir, devuelveEmail, devuelveObjeto, Rectangulo, devuelveArrayNumr, devuelveArrayStr, devuelveArrayObj, devuelveFalse, devuelveNull, devuelveTrue, devuelveUndefined } from "./index";

//aqui se crean los casos de prueba
//describe, test(it) 
//Assertions "expect"

describe('Assertions basicos en los numeros', () => {
    test('La suma funciona', () => {
        const resultado = sumar(2,3)
        expect(resultado).toBe(5)
    })
    test('La suma no resta', () => {
        const resultado = sumar(2,3)
        expect(resultado).not.toBe(0)
    })

    test('La resta funciona', () => {
        const resultado = restar(2,3)
        expect(resultado).toBe(-1)
    })
    test('La multiplicacion funciona', () => {
        const resultado = multiplicar(2,3)
        expect(resultado).toBe(6)
    })
    test('La division funciona', () => {
        const resultado = dividir(20,4)
        expect(resultado).toBe(5)
    })
    test('Probamos el > que', () => {
        const resultado = dividir(100,5)
        expect(resultado).toBeGreaterThanOrEqual(20)
        expect(resultado).toBeGreaterThan(0)
    })
    test('Probamos el < que', () => {
        const resultado = multiplicar(5,8)
        expect(resultado).toBeLessThanOrEqual(40)
    })
})

describe('Assertions basicos con booleanos', () => {
    test('Probar que algo es true', ( ) => {
        const r = devuelveTrue()
        expect(r).toBeTruthy()
    })
    test('Probar que algo es false', ( ) => {
        const r = devuelveFalse()
        expect(r).toBeFalsy()
    })
    test('Probar que algo es null', ( ) => {
        const r = devuelveNull()
        expect(r).toBeNull()
    })
    test('Probar que algo es defined', ( ) => {
        const r = 5
        expect(r).toBeDefined()
    })
    test('Probar que algo es undefined', ( ) => {
        const r = devuelveUndefined()
        expect(r).toBeUndefined()
    })
})

describe('Assertions basicos en Strings', () => {
    test('El campo debe tener un email', () => {
        const email = devuelveEmail()
        expect(email).toMatch(/[a-zA-Z].[a-zA-Z]\.com/)
    })
})

describe('Assertions basicos en objetos', () => {
    test('Dos objetos son iguales', () => {
        const objA = devuelveObjeto()
        const objB = devuelveObjeto()
        expect(objA).toEqual(objB); //equal es utilizado para objetos
    })

    test('Objeto debe tener una propiedad llamada ANCHO', () =>{
        const rectangulo = devuelveObjeto()
        expect(rectangulo).toHaveProperty('ancho')   //siempre entre comillas, mismo nombre que propiedad
    })

    test('Objeto debe ANCHO del rectangulo siempre debe ser 10', () =>{
        const rectangulo = devuelveObjeto()
        expect(rectangulo).toHaveProperty('ancho', 10)  
    })

    test('El objeto rectA debe ser un Clase REctangulo', () => {
        //const rectA = {ancho:10, alto:11}
        const rectA = new Rectangulo(10, 11) 
        expect(rectA).toBeInstanceOf(Rectangulo)
    })

})

describe('Assertions basicos en arrays', () => {
    test('Array contiene leche', () => {
        const ar = devuelveArrayStr()
        expect(ar).toContain("leche")
    })
    test('Array contiene 5', () => {
        const ar = devuelveArrayNumr()
        expect(ar).toContain(5)
    })

    test('Array contiene id:5 ', () => {
        const ar = devuelveArrayObj()
        expect(ar).toContainEqual({id:5})
    })
})

describe('Assertions con funciones mocks', () =>{
    test('Que la funcion haya sido llamada',() => {
        const mockFn = jest.fn(()=> 5)
        const res = mockFn()
        expect(mockFn).toHaveBeenCalled()
    })
    test('Que la funcion haya sido llamada n veces',() => {
        const mockFn = jest.fn(()=> 5)
        const res = mockFn()
        const res2 = mockFn()
        const res3 = mockFn()
        expect(mockFn).toHaveBeenCalledTimes(3)
    })
    test('Que la funcion haya sido llamada con un parámetro',() => {
        const mockFn = jest.fn(()=> 5)
        const res = mockFn('prueba')
        expect(mockFn).toHaveBeenCalledWith('prueba')
    })
})

