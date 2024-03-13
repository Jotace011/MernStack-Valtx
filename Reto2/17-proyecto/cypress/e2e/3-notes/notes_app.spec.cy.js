/// <reference types="cypress" />

describe('Testeamos nuestra aplicacion de notas', () => {

    beforeEach(()=>{   //visita cada vez que realice test
        cy.visit('/')
    })

    //beforeAll (este visita una vez para todo)

    it('Se renderiza correctamente', () => {
            cy.contains('Task List - hosting en Firebase')
        
    })

    it('Podemos añadir una nueva tarea', () => {
        const textNewTask = "Testeamos en cypress"
       cy.get('input[placeholder="New Task"]').type(textNewTask)
       cy.get('button.btn-add-task').click()
       cy.get('.todo-list li').last().contains(textNewTask)
    })
    
})