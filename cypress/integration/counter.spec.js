/* global describe it cy */

describe('Counter Page', () => {
  it('Increments the counter', () => {
    cy.visit('http://localhost:4000') // Navigate to localhost:4000
    cy.contains('Increment').click() // Click "Increment"
    cy.get('.counter').should('contain', 1) // Verify .counter contains "1"
  })

  it('Decrements the counter', () => {
    cy.contains('Decrement').click() // Click "Decrement"
    cy.get('.counter').should('contain', 0) // Verify .counter contains "0"
  })

  it('Increments the counter asyncronously', () => {
    cy.contains('Increment Async').click() // Click "Increment Async"
    cy.wait(300) // Wait 300 milliseconds
    cy.get('.counter').should('contain', 1) // Verify .counter contains "1"
  })
})
