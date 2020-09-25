import { RouteOptions } from '../../types';

export const buildRequest = (): RouteOptions => {
  return {
    method: 'GET',
    baseUrl: 'https://rxnav.nlm.nih.gov',
    path: '/REST/interaction/interaction.json',
  };
};
