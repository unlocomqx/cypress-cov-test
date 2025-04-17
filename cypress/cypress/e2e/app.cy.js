/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('test app', () => {
  beforeEach(() => {

  })

  it('test root', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Hello World!')
    cy.contains('1+2=3')
  })
})
