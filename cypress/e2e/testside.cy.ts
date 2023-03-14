describe('does site connect?', ()=> {
  it('passes', ()=>{
    cy.visit('http://localhost:3000/')
  })
})