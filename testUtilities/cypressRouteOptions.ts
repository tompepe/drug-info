import { InteractionOptions } from './types';

type PartialCypressRouteOptions<T> = {
  method: string;
  url: string;
  status: number;
  response: T;
};

export const cypressRouteOptions = <T>(
  baseUrl: string,
  interactionOptions: InteractionOptions<T>
): PartialCypressRouteOptions<T> => {
  return {
    method: interactionOptions.method,
    url: `${baseUrl}${interactionOptions.path}*`,
    status: interactionOptions.status,
    response: interactionOptions.response,
  };
};
