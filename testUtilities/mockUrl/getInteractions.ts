/* eslint-disable import/no-extraneous-dependencies */
import { InteractionObject, Matchers } from '@pact-foundation/pact';
import { PactOptions } from '@pact-foundation/pact/dsl/options';
import path from 'path';
import fakeFetch from '../fakeFetch';
import { buildRequest } from './interactions/buildRequest';

export const pactInteraction = <T>(
  expectedQuery: string,
  expectedResponse: T,
  status: number
): InteractionObject => {
  const req = buildRequest();
  return {
    state: `{ data-exists-matching: ${expectedResponse} }`,
    uponReceiving: `{ method: ${req.method}, query: ${expectedQuery} }`,
    withRequest: {
      method: req.method,
      path: req.path,
      query: expectedQuery,
    },
    willRespondWith: {
      status,
      body: Matchers.somethingLike(expectedResponse),
    },
  };
};

// todo: get fakeURL from pact in this file
export const fakeInteractionFetch = (): ((
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>) => {
  const req = buildRequest();
  const po = pactOptions();
  const fakeUrl = `http://${po.host}:${po.port}`;
  return fakeFetch(fakeUrl, req.baseUrl);
};

// todo: consider moving this
export const pactOptions = (): PactOptions => {
  return {
    cors: true,
    port: 8081,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    // loglevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'drug-interaction-consumer',
    provider: 'drug-interaction-provider',
    host: '127.0.0.1',
  };
};
