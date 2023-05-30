/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('My Second Test Case', () => {
        cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
        // fixture
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => 
        {    
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes ('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
  })