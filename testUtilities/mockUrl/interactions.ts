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
              // duplicate??
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '88014',
                      name: 'rizatriptan',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      name: 'Rizatriptan',
                      url: 'http://www.drugbank.ca/drugs/DB00953#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '8123',
                      name: 'phenelzine',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB00780',
                      name: 'Phenelzine',
                      url: 'http://www.drugbank.ca/drugs/DB00780#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The metabolism of Rizatriptan can be decreased when combined with Phenelzine.',
              },
            ],
          },
        ],
      },
      {
        interactionType: [
          {
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
                      id: 'DB00953',
                      name: 'Rizatriptan',
                      url: 'http://www.drugbank.ca/drugs/DB00953#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '42375',
                      name: 'leuprolide',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB00007',
                      name: 'Leuprolide',
                      url: 'http://www.drugbank.ca/drugs/DB00007#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'Leuprolide may decrease the excretion rate of Rizatriptan which could result in a higher serum level.',
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
                      name: 'Rizatriptan',
                      url: 'http://www.drugbank.ca/drugs/DB00953#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '8702',
                      name: 'procarbazine',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB01168',
                      name: 'Procarbazine',
                      url: 'http://www.drugbank.ca/drugs/DB01168#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The metabolism of Rizatriptan can be decreased when combined with Procarbazine.',
              },
              // duplicate??
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '88014',
                      name: 'rizatriptan',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      name: 'Rizatriptan',
                      url: 'http://www.drugbank.ca/drugs/DB00953#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '30121',
                      name: 'moclobemide',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB01171',
                      name: 'Moclobemide',
                      url: 'http://www.drugbank.ca/drugs/DB01171#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The metabolism of Rizatriptan can be decreased when combined with Moclobemide.',
              },
              // duplicate??
              {
                interactionConcept: [
                  {
                    minConceptItem: {
                      rxcui: '88014',
                      name: 'rizatriptan',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      name: 'Rizatriptan',
                      url: 'http://www.drugbank.ca/drugs/DB00953#interactions',
                    },
                  },
                  {
                    minConceptItem: {
                      rxcui: '6011',
                      name: 'isocarboxazid',
                      tty: 'IN',
                    },
                    sourceConceptItem: {
                      id: 'DB01247',
                      name: 'Isocarboxazid',
                      url: 'http://www.drugbank.ca/drugs/DB01247#interactions',
                    },
                  },
                ],
                severity: 'N/A',
                description:
                  'The metabolism of Rizatriptan can be decreased when combined with Isocarboxazid.',
              },
            ],
          },
        ],
      },
    ],
  },
});
