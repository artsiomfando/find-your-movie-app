/**
 * @jest-environment jsdom
*/

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  it('Header snapshot', () => {
    const tree = render(
      <Router>
        <Header />
      </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
