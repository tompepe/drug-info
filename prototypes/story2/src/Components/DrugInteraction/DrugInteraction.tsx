import React, { FC } from 'react';
import { DrugInteractionDetails } from '../DrugInteractionDetails/DrugInteractionDetails';
import InteractionsGetProvider, {
  ConsumeInteractions,
  InteractionsGetConsumer,
} from '../FetchProviders/InteractionsGet';

const RenderValue: FC<{ value: any }> = (value: any) => {
  const interactionTypeGroup = value?.interactionTypeGroup ?? [{}];
  const interactionType = interactionTypeGroup[0].interactionType ?? [{}];
  const { name } = interactionType[0]?.minConceptItem ?? {};

  return (
    <>
      <h1>Name: {name}</h1>
      <DrugInteractionDetails
        interactionPairIndex={1}
        interactionTypeGroupIndex={0}
        interactionTypeIndex={0}
      />
    </>
  );
};

export const DrugInteraction = (): JSX.Element => {
  // todo: provide url and or query args up to provider
  return (
    <>
      <ConsumeInteractions mapper={RenderValue} />
    </>
  );
};
