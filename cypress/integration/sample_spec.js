describe('My First Test', () => {
  it('Visit', () => {
    cy.visit('/auth')
    cy.contains('山樱').click()
    cy.url().should('include', '/h5page/home')
    
    cy.get('.van-tabbar-item').contains('工作台').click()
    cy.url().should('include', '/h5page/workbench')

    cy.get('.item').contains('项目').click()

    cy.url().should('include', '/h5page/project')
  })
})