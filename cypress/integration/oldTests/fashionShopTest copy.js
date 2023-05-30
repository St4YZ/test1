/// <reference types="Cypress" />
require('cypress-xpath')

describe('MakeUp Automation test', () => {
    it('Add items to the basket', () => {
        cy.viewport(1360,768)
        cy.visit("https://makeup.com.ua/ua/")
        cy.url().should('eq', 'https://makeup.com.ua/ua/')
        cy.get('#menu-toggle').click({force:true})
        cy.get(':nth-child(4) > .menu-list__link').click()
        cy.get('.simple-slider-list-buttons .button.buy').first().click({force:true})
        cy.get('.link').click()
        cy.wait(4000)
        cy.get('#menu-toggle').click({force:true})
        cy.get(".catalog-price-row").scrollIntoView
        cy.contains("Одяг").first().click({force:true})
        cy.get('.simple-slider-list-buttons .button.buy').first().click({force:true})
        cy.get('.link').click()
        cy.get('.header-basket').click()
        cy.get('.page-header').should('contain',"Кошик")
        cy.get('.product-list-wrap').find('.product-list_product-item').then(($cartProducts) => {
            const cartProductNames = $cartProducts.map((i, el) => Cypress.$(el).text().trim()).get()
            cy.get('.product-list_product-item').then(($products) => {
              const productNames = $products.map((i, el) => Cypress.$(el).text().trim()).get()
              expect(cartProductNames).to.deep.equal(productNames)
            })
          })
          cy.get('.cart-products .product').then($products => {
          const cartProducts = $products.map((i, el) => ({
            name: Cypress.$(el).find('.product__header').text().trim(),
            price: parseFloat(Cypress.$(el).find('.product__price').text().trim().replace('$', ''))
            })).get()
            
            // зберігаємо загальну ціну з кошика
            const cartTotalPrice = parseFloat(Cypress.$('.total span').text().trim().replace('$', ''))
            
            // обчислюємо загальну ціну продуктів у кошику
            const expectedTotalPrice = cartProducts.reduce((total, product) => total + product.price, 0)
            
            // перевіряємо, що обчислена загальна ціна співпадає з загальною ціною у кошику
            expect(cartTotalPrice).to.equal(expectedTotalPrice)
            })})})