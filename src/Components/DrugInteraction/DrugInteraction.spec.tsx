import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import path from 'path';
import { Pact, Matchers } from '@pact-foundation/pact';
import fetch from 'isomorphic-fetch';
import { DrugInteraction } from './DrugInteraction';

const port = 8080;
const provider = new Pact({
  cors: true,
  port,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  // loglevel: 'debug',
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  pactfileWriteMode: 'update',
  consumer: 'drug-interaction-consumer',
  provider: 'drug-interaction-provider',
  host: '127.0.0.1',
});
const name = 'caffeine';

describe('<DrugInteraction />', () => {
  beforeAll(async () => {
    await provider.setup();
  });
  afterAll(async () => {
    await provider.finalize();
  });
  beforeEach(() => {
    const fakeFetch: (
      input: RequestInfo,
      init?: RequestInit
    ) => Promise<Response> = async (input, init) => {
      let input2 = input;
      if (typeof input === 'string') {
        input2 = input.replace(
          'https://rxnav.nlm.nih.gov/',
          'http://127.0.0.1:8080/'
        );
      }
      return fetch(input2, init);
    };
    global.fetch = fakeFetch;
    const expectedQuery = 'rxcui=88014';
    provider.addInteraction({
      state: 'x',
      uponReceiving: 'get w/ request for drug cui 88014',
      withRequest: {
        method: 'GET',
        path: '/REST/interaction/interaction.json',
        query: expectedQuery,
      },
      willRespondWith: {
        status: 200,
        body: Matchers.somethingLike({
          interactionTypeGroup: [
            {
              interactionType: [{ minConceptItem: { name } }],
            },
          ],
        }),
      },
    });

    render(<DrugInteraction />);
  });
  afterEach(cleanup);

  it('should render a page header and labels', async () => {
    expect(
      await screen.findByText(/generic name: caffeine/i)
    ).toBeInTheDocument();
  });
});
