/// <reference types="Cypress" />

describe('My First Test', () => {
    it('My first Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=postman"
            req.continue((res)=>
                {
                   // expect(res.statusCode).to.equal(403)
                })

        }).as('dummyUrl')
        cy.get('.btn.btn-primary').click()
        cy.wait('@dummyUrl')
    })
  })