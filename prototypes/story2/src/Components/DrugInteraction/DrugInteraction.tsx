import React, { FC } from 'react';
import { DrugInteractionDetails } from '../DrugInteractionDetails/DrugInteractionDetails';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

const RenderValue: FC<{ value: any }> = (value: any) => {
  const interactionTypeGroup = value?.interactionTypeGroup ?? [{}];
  const interactionType = interactionTypeGroup[0].interactionType ?? [{}];
  const { name } = interactionType[0]?.minConceptItem ?? {};
  const { rxcui } = interactionType[0]?.minConceptItem ?? {};

  return (
    // todo: mapper smartly iterates over lists and dedupes
    <>
      <h1>Name: {name}</h1>
      <DrugInteractionDetails
        filterOutRxcui={rxcui}
        indexMapper={() => ({
          interactionPairIndex: 0,
          interactionTypeGroupIndex: 0,
          interactionTypeIndex: 0,
        })}
      />
    </>
  );
};

export const DrugInteraction = (): JSX.Element => {
  return (
    <>
      <ConsumeInteractions mapper={RenderValue} />
    </>
  );
};
