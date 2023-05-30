/// <reference types="Cypress" />

describe('My First Test', () => {
    it('My first Test Case', () => {
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Appium Automation with Java",
            "isbn":"bcd2",
            "aisle":"22712321238838282382382",
            "author":"John fox"
                   }).then(function(response)
                   {
                       expect(response.body).to.have.property("Msg","successfully added")
                       expect(response.status).to.eq(200)
                   })
    })
  })