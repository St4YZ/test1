/// <reference types="Cypress" />

describe('My 6th Test', () => {
    it('My 6th Test Case', () => {
        // mouse hover 
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        cy.contains('Reload').click({force:true})











    })
  })