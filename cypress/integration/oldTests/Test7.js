/// <reference types="Cypress" />

describe('My 7th Test', () => {
    it('My 7th Test Case', () => {
        //  Handling Child windows using Cypress
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.visit(url)
        })
        // this code not works










    })
  })