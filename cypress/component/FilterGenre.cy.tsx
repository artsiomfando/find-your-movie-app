import React from 'react';
 
import FilterGenre from '../../src/components/FilterGenre';
  
describe('FilterGenre', () => {
  it('render FilterGenre', () => {
    cy.mount(<FilterGenre activeGenre="Documentary" onGenreChange={cy.stub()} />);
    cy.get('.filterGenre a').first()
      .should('contain.text', 'All');

    cy.contains('Documentary')
      .should('have.class', 'active');
   });

  it('set active class to correct menuitem', () => {
    cy.mount(<FilterGenre activeGenre="Horror" onGenreChange={cy.stub()} />);

    cy.contains('Horror')
      .should('have.class', 'active');
  });
 });
 