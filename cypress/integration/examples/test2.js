describe('Rozetka Test Suite', () => {
    it('Verify if the price filter working correctly for the following marketplaces”', () => {

        cy.intercept('https://hard.rozetka.com.ua/ua/videocards/c80087/21805=7116/').as('getSettings')
        cy.visit('https://hard.rozetka.com.ua/ua/videocards/c80087/21805=7116/')
        cy.wait('@getSettings')
    })
})
