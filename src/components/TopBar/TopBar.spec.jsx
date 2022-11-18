/**
 * @jest-environment jsdom
 */

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';

import TopBar from '.';

describe('TopBar', () => {
  it('TopBar snapshot', () => {
    const tree = render(
      <Router>
        <TopBar />
      </Router>
    );

    expect(tree).toMatchSnapshot();
  });
 });
 
