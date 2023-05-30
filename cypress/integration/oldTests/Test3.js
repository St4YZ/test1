/// <reference types="Cypress" />

describe('My third Test', () => {
    it('My third Test Case', () => {
        
        // CHECKBOXES
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        // cy.get('input[type="checkbox"]').check(['option2','option3'])

        // Static Dropdown
        cy.get('select').select('option3').should('have.value','option3')
        cy.get('select').select('option2').should('have.value','option2')

        // Dynamic dropdown
        // cy.get('#autocomplete').type('ind')
        // cy.get('.ui-menu-item div').each(($el, index, $list) => {
            
        //     if($el.text() === "India")
        //     {
        //         cy.wrap($el).click()
        //     }

        // })
        // cy.get('#autocomplete').should('have.value','India')
        
        // // hide/show visible and invisible elements
        // cy.get('#displayed-text').should('be.visible')
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').should('not.be.visible')
        // cy.get('#show-textbox').click()
        // cy.get('#displayed-text').should('be.visible')

        // // radio buttons click/check
        // cy.get('[value="radio2"').check().should('be.checked')






    })
  })