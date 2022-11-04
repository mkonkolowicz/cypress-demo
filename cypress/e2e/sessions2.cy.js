/// <reference types="cypress" />

describe('maciekjs techbash sessions', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://techbash.com/sessions')
  })

  it('checks maciejs picture is on the schedule', () => {
    cy.get('#sz-session-333597 > .sz-session__speakers > li > a').click()
    cy.get('.sz-speaker__photo > img').should('not.be.empty')
    cy.wait(3000)
  })

  it('checks maciejs has a session on the schedule', () => {
    cy.get('#sz-session-333597 > .sz-session__speakers > li > a').click()
    cy.get('.sz-speaker__sessions > li').should('not.be.empty')
    cy.wait(3000)
  })

  it('checks maciejs social media links should show', () => {
    cy.get('#sz-session-333597 > .sz-session__speakers > li > a').click()
    const speakerLinks = cy.get('.sz-speaker__links')
    cy.get('.sz-speaker__links').should('have.length','1')
    cy.wait(3000)
  })

})
