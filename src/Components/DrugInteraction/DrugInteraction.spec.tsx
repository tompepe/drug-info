import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Pact } from '@pact-foundation/pact';
import {
  fakeInteractionFetch,
  pactInteraction,
  pactOptions,
} from '../../../testUtilities/mockUrl/getInteractions';
import { getSuccessResponse } from "../../../testUtilities/mockUrl/interactions/getSuccessResponse";
import { DrugInteraction } from './DrugInteraction';

const provider = new Pact(pactOptions());
const name = 'caffeine';

describe('<DrugInteraction />', () => {
  beforeAll(async () => {
    await provider.setup();
  });
  afterAll(async () => {
    await provider.finalize();
  });
  beforeEach(() => {
    global.fetch = fakeInteractionFetch();
    const expectedQuery = 'rxcui=88014';
    const expectedResponse = getSuccessResponse(name);
    provider.addInteraction(
      pactInteraction(expectedQuery, expectedResponse, 200)
    );

    render(<DrugInteraction />);
  });
  afterEach(cleanup);

  it('should render a page header and labels', async () => {
    expect(
      await screen.findByText(/generic name: caffeine/i)
    ).toBeInTheDocument();
  });
});
