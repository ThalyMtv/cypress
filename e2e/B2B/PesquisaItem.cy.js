import {LoginPage} from '../../support/LoginPageB2B'
import {ProductPage} from '../../support/itemcarrinho'


describe('Product Tests', () => {
    const productPage = new ProductPage();
   // const loginPage= new LoginPage();



    beforeEach(() => {
        cy.visit('https://b2bs.dataplace.app/auth/sign-in');
        productPage.fillLoginForm('teste@teste.com.br','duZb68h@6R');
        cy.get('.d-grid > .btn').click()
        cy.scrollTo('bottom')
    });

    it('Valide se item de tela é o mesmo da pesquisa', () => {
        cy.get('input[placeholder="Pesquisar por produtos"').type('saveiro{enter}')
        cy.get('input[placeholder="Pesquisar por produtos"').invoke('val')
        cy.contains('saveiro').should('be.visible')
        //const tes = cy.get('input[placeholder="Pesquisar por produtos"').invoke('value')
          //  cy.log(tes)
            //cy.get('.g-4').wait(200).should('contain', $value)

      
    })

})