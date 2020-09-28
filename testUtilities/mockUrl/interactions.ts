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
            interactionPair: [
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '88014',
                      name: 'rizatriptan',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'NA',
                      name: 'rizatriptan',
                      url: 'NA',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '8123',
                      name: 'Phenelzine',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'NA',
                      name: 'Phenelzine',
                      url: 'NA',
                    },
                  },
                ],
                severity: 'high',
                description: 'Triptans - monoamine oxidase (MAO) inhibitors',
              },
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '88014',
                      name: 'rizatriptan',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'NA',
                      name: 'rizatriptan',
                      url: 'NA',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '30121',
                      name: 'Moclobemide',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'NA',
                      name: 'Moclobemide',
                      url: 'NA',
                    },
                  },
                ],
                severity: 'high',
                description: 'Triptans - monoamine oxidase (MAO) inhibitors',
              },
            ],
          },
          {
            minConceptItem: { name },
            interactionPair: [
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '88014',
                      name: 'rizatriptan',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'NA',
                      name: 'rizatriptan',
                      url: 'NA',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '6011',
                      name: 'Isocarboxazid',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'NA',
                      name: 'Isocarboxazid',
                      url: 'NA',
                    },
                  },
                ],
                severity: 'high',
                description: 'Triptans - monoamine oxidase (MAO) inhibitors',
              },
            ],
          },
        ],
      },
      {
        interactionType: [
          {
            minConceptItem: { name },
            interactionPair: [
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '384455',
                      name: 'tigecycline',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB00560',
                      name: 'Tigecycline',
                      url: 'http://www.drugbank.ca/drugs/DB00560#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '1344',
                      name: 'BCG Vaccine',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB12768',
                      name: 'BCG vaccine',
                      url: 'http://www.drugbank.ca/drugs/DB12768#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The therapeutic efficacy of BCG vaccine can be decreased when used in combination with Tigecycline.',
              },
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '384455',
                      name: 'tigecycline',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB00560,APRD01307',
                      name: 'Tigecycline',
                      url: 'http://www.drugbank.ca/drugs/DB00560#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '1546457',
                      name: 'Picosulfuric Acid',
                      tty: 'PIN',
                    },
                    sourceConceptItem: {
                      id: 'DB09268',
                      name: 'Picosulfuric acid',
                      url: 'http://www.drugbank.ca/drugs/DB09268#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The therapeutic efficacy of Picosulfuric acid can be decreased when used in combination with Tigecycline.',
              },
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '384455',
                      name: 'tigecycline',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB00560,APRD01307',
                      name: 'Tigecycline',
                      url: 'http://www.drugbank.ca/drugs/DB00560#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '11289',
                      name: 'Warfarin',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB00682,APRD00341',
                      name: 'Warfarin',
                      url: 'http://www.drugbank.ca/drugs/DB00682#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The serum concentration of Warfarin can be increased when it is combined with Tigecycline.',
              },
            ],
          },
        ],
      },
    ],
  },
});
