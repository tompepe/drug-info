import { InteractionOptions } from 'testUtilities/types';

export const getSuccessResponse = (
  name: string,
  query?: string
): InteractionOptions<any> => ({
  method: 'GET',
  path: '/REST/interaction/interaction.json',
  query,
  status: 200,
  response: {
    interactionTypeGroup: [
      {
        interactionType: [
          {
            minConceptItem: { name },
            interactionPair: [{}, {}],
          },
          {
            minConceptItem: { name },
            interactionPair: [{}],
          },
        ],
      },
      {
        interactionType: [
          {
            minConceptItem: { name },
            interactionPair: [{}, {}, {}],
          },
        ],
      },
    ],
  },
});
