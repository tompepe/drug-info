import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

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
  };
}

export const DrugInteraction = (): JSX.Element => {
  const rxcui = '88014';
  const [genericName, setGenericName] = useState();
  const [drugInteractions, setDrugInteractions] = useState(0);

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
    return interactionsResponse.interactionTypeGroup.reduce(
      (sum: any, next: any) =>
        sum +
        next.interactionType.reduce(
          (intSum: any, intNext: any) =>
            intSum + intNext.interactionPair.length,
          0
        ),
      0
    );
  };

  useAsyncEffect(async () => {
    const interactionsResponse = await fetch(
      `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`
    );
    const interactions = await interactionsResponse.json();
    const responseGenericName =
      interactions.interactionTypeGroup[0].interactionType[0].minConceptItem
        .name;
    setGenericName(responseGenericName);
    setDrugInteractions(getDrugCount(interactions));
  }, []);
  return (
    <>
      <h1>Generic Name: {genericName}</h1>
      <h2>Interaction Count: {drugInteractions}</h2>
    </>
  );
};
