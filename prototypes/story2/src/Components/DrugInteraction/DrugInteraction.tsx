import React, { FC } from 'react';
import indexMapper from '../../Utils/indexMapper';
import { DrugInteractionDetails } from '../DrugInteractionDetails/DrugInteractionDetails';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

const RenderValue: FC<{ value: any }> = (value: any) => {
  const interactionTypeGroup = value?.interactionTypeGroup ?? [{}];
  const interactionType = interactionTypeGroup[0].interactionType ?? [{}];
  const { name } = interactionType[0]?.minConceptItem ?? {};
  const { rxcui } = interactionType[0]?.minConceptItem ?? {};
  const drugInteractionIndexes = indexMapper(value);

  return (
    <>
      <h1>Name: {name}</h1>
      <h3>Interaction Count: {drugInteractionIndexes.length}</h3>
      {drugInteractionIndexes.map((x) => (
        <DrugInteractionDetails
          key={x.key}
          filterOutRxcui={rxcui}
          indexMap={x}
        />
      ))}
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
