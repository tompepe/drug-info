import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrugInteraction } from './DrugInteraction';

describe('<DrugInteraction />', () => {
  beforeEach(() => {
    render(<DrugInteraction />);
  });

  it('should render a page header and labels', async () => {
    expect(
      await screen.findByText(/generic name: rizatriptan/i)
    ).toBeInTheDocument();
  });
});
