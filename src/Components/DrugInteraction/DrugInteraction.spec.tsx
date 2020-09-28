import React from 'react';
import { render, screen } from '@testing-library/react';
import { baseUrl } from '../../../testUtilities/mockUrl/baseUrl';
import { PactWrapper } from '../../../testUtilities/PactWrapper';
import { getSuccessResponse } from '../../../testUtilities/mockUrl/interactions';
import { DrugInteraction } from './DrugInteraction';

const fetchPact = new PactWrapper(baseUrl);
const genericDrugName = 'caffeine';

describe('<DrugInteraction />', () => {
  beforeAll(fetchPact.setup);

  afterAll(fetchPact.finalize);

  beforeEach(() => {
    const expectedQuery = 'rxcui=88014';
    const expectedResponse = getSuccessResponse(genericDrugName, expectedQuery);
    fetchPact.addInteraction(expectedResponse);

    render(<DrugInteraction />);
  });

  it('should render the generic name returned by the API', async () => {
    expect(
      await screen.findByText(
        new RegExp(`generic name: ${genericDrugName}`, 'i')
      )
    ).toBeInTheDocument();

    // expect(
    //   await screen.findByText(new RegExp('interaction count: 3', 'i'))
    // ).toBeInTheDocument();
  });
});
