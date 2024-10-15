Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {

    cy.get('input[id="firstName"]') .type("Anderson Gularte") // preencher campo nome
    cy.get('input[id="lastName"]').type("Wodnoff") // preencher campo sobrenome
    cy.get('#email').type("andersonwodnff@hotmail.com")  // preencher o email
    cy.get('textarea[id="open-text-area"]').type( 'Text')
    cy.get('button,[type="submit"]' ).click()

    cy.get('.success').should('be.visible')
})