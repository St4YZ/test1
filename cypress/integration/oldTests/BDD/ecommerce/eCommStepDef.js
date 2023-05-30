/// <reference types="Cypress" />
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"
const homePage = new HomePage()
const productPage = new ProductPage()
let name;
let data;
beforeEach(function()
{
    cy.fixture('example').then(function(users)
    {
    data = users;
    return data;
    })

})


Given('I open Ecommerce Page',() =>
{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

When ('I add items to Cart',function() 
{
    
    homePage.getShopTab().click()
    data.productName.forEach(element => {
        cy.selectProduct(element)
    });
    productPage.getProductName().click()
})

When ('Validate the total prices',() =>
{
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum=Number(sum)+Number(res)
        
    }).then(function()
    {
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element)
    {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(Number(sum))
    })
})


Then ('select the country submit and verify Thank you', () =>
{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    // cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
    cy.get('.alert').then(function(element)
    {
        
        const actualText = element.text()
        expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks :-).")).to.be.true
        
    })
})

When ('I fill the form details',function(dataTable)
{
    // [bobz, male]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})
Then ('Validate the forms behavior',function()
{
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntreprenur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
})
Then ('Select the shop page',() =>
{
    homePage.getShopTab().click()
})