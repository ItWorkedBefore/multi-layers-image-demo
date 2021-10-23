import React from 'react';
import {render, screen} from '@testing-library/react';
import {ImagePlaceholder} from './ImagePlaceholder';

describe('components > ImagePlaceholder', () => {
  beforeEach(() => {});

  it('renders properly', () => {
    const {asFragment} = render(<ImagePlaceholder />);

    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText(/image generation/i)).toBeDefined();
  });
});
