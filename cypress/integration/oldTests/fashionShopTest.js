/// <reference types="Cypress" />
require('cypress-xpath')

describe('MakeUp Automation test', () => {
    it('Verify if the price filter working correctly for the following marketplaces', () => {
        cy.visit('https://makeup.com.ua/ua/')
        cy.url().should('eq', 'https://makeup.com.ua/ua/')
        cy.get("a[href='/ua/categorys/23437/']").click({force:true})
        cy.get('#popularinput-checkbox-2243-118157').click()
        cy.get('#input-checkbox-2251-24025').click()
        cy.wait(3000)
        cy.get('#input-checkbox-2259-22435').click()
        cy.wait(3000)
        cy.get('.catalog-sort-list > :nth-child(2) > label').click()
        cy.wait(3000)
        cy.get('.catalog-products').find(".simple-slider-list__item.with-palette").then((products) => {
            console.log(products.length)
            for (let i = 1; i < products.length; i++) {
                const price1 = parseFloat(products[i - 1].querySelector('.simple-slider-list__price .price_item').innerText.replace('$', ''));
                const price2 = parseFloat(products[i].querySelector('.simple-slider-list__price .price_item').innerText.replace('$', ''));
                expect(price1).to.be.at.most(price2);
            }})
        })
    })
    xit('Add items to the basket', () => {
        cy.visit('https://makeup.com.ua/ua/')
        cy.url().should('eq', 'https://makeup.com.ua/ua/')
        cy.wait(2500)
        cy.get('#menu-toggle').click()
        cy.xpath("(//a[contains(text(),'Макіяж')])[1]").click()
        cy.wait(5500)
        cy.get('.simple-slider-list-buttons .button.buy').first().click({force:true})
        cy.get('.link').click()
        cy.get('#menu-toggle').click()
        cy.get("a[href='/ua/categorys/20272/']").click().should('be.visible')
        cy.get('.simple-slider-list-buttons .button.buy').first().click({force:true})
        cy.get('.link').click()
        cy.get('.header-basket').click()
        cy.get('.page-header').should('contain',"Кошик")
        cy.get('.product__header').should("have.length",2).should("contain","Зміцнюючий шампунь")
        cy.get('.product__price').should("have.length",2).should('contain',"92")
        cy.get('.product__header').should("contain","L`Oréal Paris Alliance Perfect Nude")
        cy.get('.product__price').should('contain',"350")
        cy.get('.product__price').then(($prices) => {
            const productPrices = Array.from($prices, el => parseFloat(el.innerText))
            return productPrices.reduce((acc, price) => acc + price, 0)
        }).as('totalPrice')

// знайти суму в кошику та порівняти з загальною ціною продуктів
cy.get("div[class='total'] span strong").invoke('text').then(text => parseFloat(text.replace('₴', ''))).should('eq',('totalPrice'))
})
    