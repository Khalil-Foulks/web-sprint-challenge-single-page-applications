describe('Test inputs and submits', () =>{
    it('can navigate to site', () =>{
        cy.visit('http://localhost:3000/pizza')
    })

    it('can ADD a name input', () => {
        cy.get('input[name=name]')
            .type('Khalil')
            .should('have.value', 'Khalil')
    })

    it('can select MULTIPLE toppings', () => {
        cy.get('input[name=pepperoni]').check()
            .should('be.checked')

        cy.get('input[name=pineapple]').check()
            .should('be.checked')

        cy.get('input[name=mushrooms]').check()
            .should('be.checked')
    })

    it('can press SUBMIT', ()=>{
        cy.get('button#submit').click()
    })
})