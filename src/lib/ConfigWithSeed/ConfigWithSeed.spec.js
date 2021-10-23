import React from 'react';
import {render} from '@testing-library/react';
import Component from './Component';

describe('lib > ConfigWithSeed', () => {
  beforeEach(() => {});

  it('renders without crashing', () => {
    const {asFragment, baseElement} = render(<Component />);

    expect(asFragment()).toMatchSnapshot();

    expect(baseElement.querySelector('strong').textContent).toBe('6'); // 6 is value we expect, we need to convert Number to String, because HTMLElement textContent method returns string value
  });
});
