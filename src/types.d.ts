declare module '*.jpg';

declare namespace Cypress {
  interface Chainable {
    visitStartPage(): Chainable<any>;
  }
}
