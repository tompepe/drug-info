/* eslint-disable import/no-extraneous-dependencies */
import fetch from 'isomorphic-fetch';
import { InteractionObject, Matchers, Pact } from '@pact-foundation/pact';
import {
  PactOptions,
  PactOptionsComplete,
} from '@pact-foundation/pact/dsl/options';
import path from 'path';
import { InteractionOptions } from 'testUtilities/types';
import { cleanup } from '@testing-library/react';

export class PactWrapper {
  baseUrl: string;

  constructor(_baseUrl: string) {
    this.baseUrl = _baseUrl;
  }

  setup: () => Promise<PactOptionsComplete> = () => {
    global.fetch = this.fetch;
    return this.pact.setup();
  };

  finalize: () => Promise<void> = () => {
    cleanup();
    return this.pact.finalize();
  };

  addInteraction = <T>(
    interactionOptions: InteractionOptions<T>
  ): Promise<string> => {
    return this.pact.addInteraction(this.pactInteraction(interactionOptions));
  };

  private pactOptions: PactOptions = {
    cors: true,
    // todo: get any available port
    port: 8082,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    logLevel: 'fatal',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'drug-interaction-consumer',
    provider: 'drug-interaction-provider',
    host: '127.0.0.1',
  };

  private pact: Pact = new Pact(this.pactOptions);

  private pactInteraction = <T>(
    interactionOptions: InteractionOptions<T>
  ): InteractionObject => {
    return {
      state: `{ data-exists-matching: ${interactionOptions.response} }`,
      uponReceiving: `{ method: ${interactionOptions.method}, query: ${interactionOptions.query} }`,
      withRequest: {
        method: interactionOptions.method,
        path: interactionOptions.path,
        query: interactionOptions.query,
      },
      willRespondWith: {
        status: interactionOptions.status,
        body: Matchers.somethingLike(interactionOptions.response),
      },
    };
  };

  private fetch: (
    input: RequestInfo,
    init?: RequestInit
  ) => Promise<Response> = async (input, init) => {
    const fakeUrl = `http://${this.pactOptions.host}:${this.pactOptions.port}`;
    const applicationUrl = this.baseUrl;
    let input2 = input;
    if (typeof input === 'string') {
      input2 = input.replace(applicationUrl, fakeUrl);
    }
    return fetch(input2, init);
  };
}
