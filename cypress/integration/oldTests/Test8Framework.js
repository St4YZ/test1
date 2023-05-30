/// <reference types="Cypress" />

import HomePage from "./pageObjects/HomePage.js";
import ProductPage from "./pageObjects/ProductPage.js"



describe("Test 8 ",()=> {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    let data;
    before(function ()
    {
    cy.fixture('example').then(function(users)
    {   
    data = users;
    return data;
    })
})



it("Test 8 Framework",()=>{
    
    cy.visit(Cypress.env('url')+"angularpractice/")
    homePage.getEditBox().type(data.name)
    homePage.getGender().select(data.gender)
    homePage.getTwoWayDataBinding().should('have.value',data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntreprenur().should('be.disabled')
    homePage.getShopTab().click()
    
    data.productName.forEach(element => {
        cy.selectProduct(element)
    });
    productPage.getProductName().click()
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
})