/// <reference types="Cypress" />

describe('My First Test', () => {
    it('My first Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 

        {
            statusCode: 200,
            body: [{
                    "book_name": "null",
                    "isbn": "SPY40",
                    "aisle": "2529857" }]
        }).as('bookretrievals')
        cy.get('.btn.btn-primary').click()
        cy.wait("@bookretrievals").then((response) => {
            cy.get("tr").should("have.length", response.response.body.length + 1); 
          });
        cy.get('p').should('have.text','Oops only 1 Book available')


        // length of the response array =! rows of the table
        



    })
  })