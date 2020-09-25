import React from 'react';
import { render, screen } from '@testing-library/react';
import { baseUrl } from '../../../testUtilities/mockUrl/baseUrl';
import { PactWrapper } from '../../../testUtilities/PactWrapper';
import { getSuccessResponse } from '../../../testUtilities/mockUrl/interactions';
import { DrugInteraction } from './DrugInteraction';

const fetchPact = new PactWrapper(baseUrl);
const genericDrugName = 'caffeine';

describe('<DrugInteraction />', () => {
  beforeAll(async () => {
    await fetchPact.setup();
  });
  afterAll(async () => {
    await fetchPact.finalize();
  });
  beforeEach(() => {
    // todo: verify expectedQuery
    const expectedQuery = 'rxcui=88014';
    const expectedResponse = getSuccessResponse(genericDrugName, expectedQuery);
    fetchPact.addInteraction(expectedResponse);

    render(<DrugInteraction />);
  });

  it('should render a page header and labels', async () => {
    expect(
      await screen.findByText(
        new RegExp(`generic name: ${genericDrugName}`, 'i')
      )
    ).toBeInTheDocument();
  });
});
