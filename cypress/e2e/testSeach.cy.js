/// <reference types="cypress" />

describe('Busca teste bitcoin', ()=>{
    it.only('teste de busca com enter',()=>{
        cy.visit('https://duckduckgo.com');
        cy.get('#search_form_input_homepage').type('Bitcoin{enter}');
        cy.get('#links_wrapper').then(elements => {
            cy.log('Number of search results found', elements.length);
          })     

    })


    it('teste de busca com lupa', ()=>{
        cy.visit('https://duckduckgo.com');
        cy.get('#search_form_homepage').type('Bitcoin');
        cy.get('#search_button_homepage').click();
        cy.intercept('GET', 'https://duckduckgo.com/**').as('getDuck');
    })
    
})