const FEDERATED_EMAIL = process.env.FEDERATED_EMAIL! ;
const FEDERATED_PASSWORD = process.env.FEDERATED_PASSWORD! ;

/**
 * Note do not use an account with MFA for this test
 */

describe('Federated Login', () => {
  it('passes', () => {

    cy.visit('http://localhost:8080/');

    cy.get('#login').click()

    cy.origin('https://accounts.google.com', {
      args: {
        email: FEDERATED_EMAIL,
        password: FEDERATED_PASSWORD
      }

    }, ({ email, password }) => {

      Cypress.on(
        'uncaught:exception',
        (err) =>
          !err.message.includes('ResizeObserver loop') &&
          !err.message.includes('Error in protected function')
      )


      cy.get('input[type="email"]').type(email);
      cy.contains('Next').click().wait(4000)
      cy.get('[type="password"]').type(password, {
        log: false,
      })
      cy.contains('Next').click().wait(4000)
    })

    // cy.origin('http://localhost:8080/', () => {
    //   // Visit https://www.acme.com/history/founder
    //   cy.get('h1').contains('About our Founder, Marvin Acme')
    // })
  })
})

export { };