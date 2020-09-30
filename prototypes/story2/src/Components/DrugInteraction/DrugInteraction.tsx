import React, { FC } from 'react';
import indexMapper from '../../Utils/indexMapper';
import { DrugInteractionDetails } from '../DrugInteractionDetails/DrugInteractionDetails';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

const RenderValue: FC<{ value: any }> = (value: any) => {
  const interactionTypeGroup = value?.interactionTypeGroup ?? [{}];
  const interactionType = interactionTypeGroup[0].interactionType ?? [{}];
  const { name } = interactionType[0]?.minConceptItem ?? {};
  const { rxcui } = interactionType[0]?.minConceptItem ?? {};

  return (
  // todo: mapper smartly iterates over lists and dedupes
  // todo: test new utility takes response value and creates an array of objects with indexes (as below) then all the mapper has to do is iterate over this array
  // todo: remove the mapper function; replace it with index map type
  // todo: update IndexMap to include if item was deduped and where to get a second description

    <>
      <h1>Name: {name}</h1>
      {indexMapper(value).map((x) => (
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
