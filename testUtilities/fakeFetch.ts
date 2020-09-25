// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'isomorphic-fetch';

export default (
  fakeUrl: string,
  applicationUrl: string
): ((input: RequestInfo, init?: RequestInit) => Promise<Response>) => {
  return async (input, init) => {
    let input2 = input;
    if (typeof input === 'string') {
      input2 = input.replace(applicationUrl, fakeUrl);
    }
    return fetch(input2, init);
  };
};
