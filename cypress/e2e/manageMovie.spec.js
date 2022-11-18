/// <reference types="cypress" />

describe('Add, edit, delete movies', () => {
  beforeEach('visit search page', () => {
    cy.visitStartPage();
  });

  it('add movie', () => {
    cy.intercept('POST', 'http://localhost:4000/movies').as('addMovie');

    cy.contains('ADD MOVIE').click();
    cy.get('[name="title"]').type('Monet');
    cy.get('[name="poster_path"]').type('https://gallerix.pl/gallery/3/1/2/7/27807-800.webp');
    cy.get('[name="vote_average"]').type('9.5');
    cy.get('[name="runtime"]').type('90');
    cy.get('[name="overview"]').type('Amazing biography!');
    cy.get('[name="release_date"]').type('2002-01-10');
    cy.contains('Select Genre').click();
    cy.contains('label', 'Documentary').click();
    cy.contains('Submit').click();

    cy.wait('@addMovie').then(xhr => {
      const {title, overview, runtime} = xhr.response.body;

      expect(title).to.be.equal('Monet');
      expect(overview).to.be.equal('Amazing biography!');
      expect(runtime).to.be.equal(90);
    });
  });

  it('edit movie', () => {
    cy.intercept('PUT', 'http://localhost:4000/movies').as('editMovie');

    cy.get('[name="query"]').type('monet');
    cy.contains('Search').click();
    cy.wait('@defaultRequest');
    cy.get('.movieCard').first()
      .should('contain', 'Monet')
      .and('contain', '2001')
      .and('contain', 'Documentary')

    cy.get('.movieCard').rightclick();
    cy.contains('edit').click();
    cy.get('[name="overview"]').clear().type('Overview was changed!');
    cy.contains('Submit').click();

    cy.wait('@editMovie').then(xhr => {
      const { overview } = xhr.response.body;
      
      expect(overview).to.be.equal('Overview was changed!');
    });
    
  });

  it('delete movie', () => {
    cy.intercept('DELETE', 'http://localhost:4000/movies/*').as('deleteMovie');

    cy.get('[name="query"]').type('monet');
    cy.contains('Search').click();
    cy.wait('@defaultRequest');

    cy.get('.movieCard').rightclick();
    cy.contains('delete').click();
    cy.contains('Confirm').click();
    cy.wait('@deleteMovie'). then(xhr => {
      expect(xhr.response.statusCode).to.equal(204);
    });
    cy.get('.modal__close-cross').click();
    cy.wait('@defaultRequest');

    cy.get('[name="query"]').type('monet');
    cy.contains('Search').click();
    cy.wait('@defaultRequest');

    cy.get('movieCard').should('not.exist');
    
  });
});
