/// <reference types="cypress" />

import { deleteTestUser } from "../../../src/firebase/uersController"



describe('Testeamos la aplicacion de notas',() => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('div.list-route').click()
    })

    it('Aparece texto si no estamos logeados', () => {
        
        const text = "Necesitas estar logeado para añadir tareas"
        cy.contains(text)
    })

    it('No podemos escribir titulo ni desc si no estamos logeados', () => {
        
        cy.get('input[placeholder="Titulo"]').should('be.disabled')
        cy.get('textarea[placeholder="Descripcion"]').should('be.disabled')

    })

    it('Estando logeados el titulo, descr y boton de añadir se activam', () => {
        //logeamos
        const correo = "prueba2@prueba.com"
        const contra = "prueba"
        cy.contains('Login').click()
        cy.get('input[placeholder="email"]').type(correo)
        cy.get('input[placeholder="password"]').type(contra)
        cy.get('button.submit-button').click()
        cy.contains('Logout').should('exist')

        //entramos a tasklist
        cy.get('div.list-route').click()

        //probamos que se pueda ingresar datos
        cy.get('input[placeholder="Titulo"]').should('be.enabled')
        cy.get('textarea[placeholder="Descripcion"]').should('be.enabled')




    })
})

describe('Testeamos la gestion de usuarios', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Se renderiza correctamente', ()=>{
        cy.contains('FireShopping')
    })

    it('Podemos acceder a la ruta de login', () => {
        cy.contains('Este es el login').should('not.exist')
        cy.contains('Login').click()
        cy.contains('Bienvenido al Login')
    })

    it('Podemos acceder a la ruta de registrarse', () => {
        const registerTitle = "Registrate para obtener acceso"
        cy.contains(registerTitle).should('not.exist')
        cy.contains('regístrate').click()
        cy.contains(registerTitle).should('exist')
    })

    it ('Podemos registraar un usuario',() => {
        //await deleteTestUser()
        const correo = "prueba2@prueba.com"
        const contra = "prueba"
        cy.contains('regístrate').click()
        cy.get('input[placeholder="email"]').type(correo)
        cy.get('input[placeholder="password"]').type(contra)
        // cy.get('button.submit-button').click()
        // cy.contains('Bienvenido al login(home)').should('exist')
    })

    it ('Podemos iniciar con sesion con usuario test', () => {
        const correo = "prueba2@prueba.com"
        const contra = "prueba"
        cy.contains('Login').click()
        cy.get('input[placeholder="email"]').type(correo)
        cy.get('input[placeholder="password"]').type(contra)
        cy.get('button.submit-button').click()
        cy.contains('Logout').should('exist')
    })

})
