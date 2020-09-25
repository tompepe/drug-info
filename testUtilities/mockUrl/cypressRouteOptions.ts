import { RouteOptions } from "../types";

type CypressRouteOptionsClone = {
  method: string;
  url: string;
  status: number;
  response: string;
};

export const cypressRouteOptions = (
  request: RouteOptions,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  response: any,
  status: number
): CypressRouteOptionsClone => {
  // todo: consider moving to signature
  return {
    method: request.method,
    url: `${request.baseUrl}${request.path}*`,
    status,
    response,
  };
};
