import React from 'react';
import { render, screen } from '@testing-library/react';
import { baseUrl } from '../../../testUtilities/mockUrl/baseUrl';
import { PactWrapper } from '../../../testUtilities/PactWrapper';
import { getSuccessResponse } from '../../../testUtilities/mockUrl/interactions';
import { DrugInteraction } from './DrugInteraction';

const fetchPact = new PactWrapper(baseUrl);
const genericDrugName = 'caffeine';

describe('<DrugInteraction />', () => {
  beforeEach(fetchPact.setup);
  afterEach(fetchPact.finalize);

  it('should render the generic name returned by the API', async () => {
    const expectedQuery = `rxcui=88014`;
    const expectedResponse = getSuccessResponse(genericDrugName, expectedQuery);
    await fetchPact.addInteraction(
      expect.getState().currentTestName,
      expectedResponse
    );
    await render(<DrugInteraction />);

    expect(
      await screen.findByText(
        new RegExp(`generic name: ${genericDrugName}`, 'i')
      )
    ).toBeInTheDocument();
  });

  it('should render the interaction count returned by the API', async () => {
    const expectedQuery = `rxcui=88014`;
    const expectedResponse = getSuccessResponse(genericDrugName, expectedQuery);
    await fetchPact.addInteraction(
      expect.getState().currentTestName,
      expectedResponse
    );
    render(<DrugInteraction />);

    expect(
      await screen.findByText(new RegExp('interaction count: 5', 'i'))
    ).toBeInTheDocument();
  });
});
