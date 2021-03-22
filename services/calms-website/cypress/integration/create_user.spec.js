describe('Landing page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Has proper page title', () => {
        cy.title().should('include', 'CALMS Mapping')
    })

    it('Has a welcome text', () => {
        cy.get('#header').find('h1').contains('Please enter your name')
    })

    it('should have a input box', () => {
        cy.get('#input').should('have.value', '')
    })
})