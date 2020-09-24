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
    global.fetch = fetch;
    provider.addInteraction({
      state: 'x',
      uponReceiving: 'get w/ request for drug cui 88014',
      withRequest: {
        method: 'GET',
        path: '/',
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
