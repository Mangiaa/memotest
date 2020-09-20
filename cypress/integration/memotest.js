const URL = 'http://127.0.0.1:8080'

context('Memotest',()=>{ 
    before(()=>{ 
        cy.visit(URL)
    })
    describe('Juega al Memotest',() =>{
        const numeroCuadros= 12

       it('el tablero debe tener cuadros', () => {
        cy.get('#tablero').find('.cuadro').should('have.length', numeroCuadros)

       }) 
    })
    it('test', ()=>{

    })
})