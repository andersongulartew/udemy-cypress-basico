
Cypress._.times(5, function(){
    it("test testar a página da política de privacidade de forma independente", () => {
        cy.visit("./src/privacy.html");

        cy.contains('Talking About Testing').should('be.visible')
    });
})




