import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { InteractionDetails } from '../InteractionDetails/InteractionDetails';

interface InteractionResponse {
  interactionTypeGroup: Array<{
    interactionType: Array<{
      interactionPair: Array<{
        interactionConcept: Array<InteractionConceptItem>;
      }>;
    }>;
  }>;
}

interface InteractionConceptItem {
  minConceptItem: {
    rxcui: string;
    name: string;
  };
}

interface Interaction {
  minConceptItem: {
    rxcui: string;
    name: string;
  };
  interactionPair: any[];
}

interface InteractionPair {
  severity: string;
  description: string;
  interactionConcept: InteractionConceptItem[];
}

interface InteractionDetailsType {
  severity: string;
  description: string;
  name: string;
}

export const DrugInteraction = (): JSX.Element => {
  const rxcui = '88014';
  const [genericName, setGenericName] = useState('');
  const [drugInteractions, setDrugInteractions] = useState(0);
  const [interactionDetails, setInteractionDetails] = useState<InteractionDetailsType[]>([]);

  const getInteractionDetails = (
    interactionPairs: InteractionPair[],
    primaryRxcui: string
  ) => {
    return interactionPairs.map((pair) => ({
      severity: pair.severity,
      description: pair.description,
      name: pair.interactionConcept.filter(
        (ic) => ic.minConceptItem.rxcui !== primaryRxcui
      )[0].minConceptItem.name,
    }));
  };

  const getDrugCount = (interactionsResponse: InteractionResponse) => {
    // todo: cleanup really ugly
    const interactionPairs = interactionsResponse.interactionTypeGroup.reduce(
      (agg, next) => {
        const nextValue = next.interactionType.reduce((initAgg, intNext) => {
          const intNextValue = intNext.interactionPair.map(
            (x) => x.interactionConcept
          );
          return [...initAgg, ...intNextValue];
        }, [] as Array<Array<InteractionConceptItem>>);

        return [...agg, ...nextValue];
      },
      [] as Array<Array<InteractionConceptItem>>
    );

    const interactionDrugDrugCuis = interactionPairs.map((x) =>
      x.map((y) => y.minConceptItem.rxcui)
    );

    const interactionDrugCuis = new Set(
      interactionDrugDrugCuis.map((x) =>
        JSON.stringify(x.filter((y) => y !== rxcui))
      )
    );

    const distinctInteractionDrugCuis = Array.from(
      interactionDrugCuis
    ).map((x) => JSON.parse(x));

    return distinctInteractionDrugCuis.length;
  };

  useAsyncEffect(async () => {
    const interactionsResponse = await fetch(
      `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`
    );
    const interactions = await interactionsResponse.json();
    const {
      minConceptItem,
      interactionPair,
    } = interactions.interactionTypeGroup[0].interactionType[0];

    const details = getInteractionDetails(interactionPair, rxcui);
    setInteractionDetails(details);
    setGenericName(minConceptItem.name);
    setDrugInteractions(getDrugCount(interactions));
  }, []);
  return (
    <>
      <h1>Generic Name: {genericName}</h1>
      <h2>Interaction Count: {drugInteractions}</h2>
      {interactionDetails.map((details) => 
        <InteractionDetails
          key={details.name}
          name={details.name}
          description={details.description}
          severity={details.severity}
        />
      )}
    </>
  );
};
