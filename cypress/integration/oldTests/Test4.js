/// <reference types="Cypress" />

describe('My 4th Test', () => {
    it('My 4th Test Case', () => {
        
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        // window:alert
        cy.on('window:alert',(str) =>
        {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        // window:confirm
        cy.on('window:confirm',(str) =>
        {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        // Switch tab Example
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        cy.url().should('include','rahulshettyacademy')


    })
  })