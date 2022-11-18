/// <reference types="cypress" />

describe('Search, sort, filter movies', () => {
  beforeEach('visit search page', () => {
    cy.visitStartPage();
  });

  it('search for movie', () => {
    cy.intercept('GET', 'http://localhost:4000/movies?*', {fixture: 'moviesEarth.json'}).as('getMovies');
    cy.intercept('GET', 'http://localhost:4000/movies/*').as('getMovie');

    cy.get('[name="query"]').type('earth');
    cy.contains('Search').click();
    cy.wait('@getMovies').then(xhr => {
      const [movie] = xhr.response.body.data;
      if (movie) {
        expect(movie.title.toLowerCase()).contain('earth');
      }
      expect(xhr.response.statusCode).to.equal(200);
    })

    cy.get('.movieCard').first().click();
    cy.wait('@getMovie').then(xhr => {
      cy.get('.movieDetails')
        .should('contain', 'Amazing')
        .and('contain', '2017')
        .and('contain', 'astonishing journey');
    });
  });

  it('filter by genre', () => {
    cy.get('.filterGenre .item').contains('Documentary').click();
    cy.wait('@defaultRequest').then(xhr => {
      cy.get('.movieCard').each((card) => {
        cy.wrap(card).should('contain', 'Documentary');
      });
    });

    cy.get('.filterGenre .item').contains('Horror').click();
    cy.wait('@defaultRequest').then(xhr => {
      cy.get('.movieCard').each((card) => {
        cy.wrap(card).should('contain', 'Horror');
      });
    });
  });

  it('sort by category', () => {
    cy.get('.filterDropdown__button').click().contains('RATING').click();
    cy.wait('@defaultRequest').then(xhr => {
      const [
        {vote_average: one},
        {vote_average: two},
        {vote_average: three},
        {vote_average: four},
        {vote_average: five}
      ] = xhr.response.body.data;

      expect(one >= two).to.be.true;
      expect(two >= three).to.be.true;
      expect(three >= four).to.be.true;
      expect(four >= five).to.be.true;
    });
  });
});
