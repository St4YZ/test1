/// <reference types="Cypress" />

describe('My First Test', () => {
    it('My first Test Case', () => {
        cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
        // fixture
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4).then(function()
        {
            console.log('ZALUPA')
        })
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => 
        {    
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes ('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        //this is to print in logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        // const logo = cy.get('.brand')
        // cy.log(cy.get('.brand').text())











    })
  })