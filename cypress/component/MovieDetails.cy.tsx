import React from 'react';
import MovieDetails from '../../src/components/MovieDetails';

const mockMovie = {
  "id": 464593,
  "title": "Earth: One Amazing Day",
  "tagline": "One day. One planet. Infinite wonder.",
  "vote_average": 7.8,
  "vote_count": 9,
  "release_date": "2017-08-04",
  "poster_path": "https://image.tmdb.org/t/p/w500/7OKStVtpeptnfIgxXEyQubMMTey.jpg",
  "overview": "An astonishing journey revealing the awesome power of the natural world. Over the course of one single day, we track the sun from the highest mountains to the remotest islands to exotic jungles.",
  "budget": 0,
  "revenue": 0,
  "genres": [
    "Documentary"
  ],
  "runtime": 95 
};

describe('MovieDetails.cy.ts', () => {
  it('playground', () => {
    cy.mount(<MovieDetails movie={mockMovie} resetId={cy.stub()} />);
  })
})
