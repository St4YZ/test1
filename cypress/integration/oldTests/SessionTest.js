/// <reference types="Cypress" />
const neatCSV = require('neat-csv')
let productName
let InvoiceNumber

describe('JWT Session', () => {
    it('is logged in through local store', async () => {
       cy.LoginAPI().then(function()
       {
        cy.visit("https://www.rahulshettyacademy.com/client", 
        {
          onBeforeLoad: function(window){
            window.localStorage.setItem("token", Cypress.env('token'))
          }
        })
        

       })
       cy.get('.card-body b').eq(1).then(function(ele)
       {
        productName = ele.text()
       })
       cy.get('.card-body button:last-of-type').eq(1).click();
       cy.get('.btn.btn-custom').eq(2).click();
       cy.contains("Checkout").click();
       cy.get("[placeholder*='Country']").type("ind")
       cy.get('.ta-results button').each(($el,$index,$list) => {
        if($el.text() === " India")
        {
          cy.wrap($el).click()
        }
       })
       cy.get('.btnn').click();
       cy.get('.em-spacer-1 > .ng-star-inserted').then(function(numb)
       {
        InvoiceNumber = numb.text()
       })
       cy.wait(3000);
       cy.get('.mt-3').click();
       
       cy.readFile(Cypress.config("fileServerFolder")+"\\cypress\\downloads\\order-invoice_hanhur.maksym.csv").
       then(async(text) =>
       {
        

        const csv =  await neatCSV(text)
        console.log(csv)
        const actualProductCSV = csv[0]["Product Name"]
        const actualInvoiceNumber = csv[0]["Invoice Number"]
        expect(InvoiceNumber).to.equal(actualInvoiceNumber)
        expect(productName).to.equal(actualProductCSV)
       })
       


    })
  })