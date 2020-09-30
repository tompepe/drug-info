import React, { FC } from 'react';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

export const DrugInteractionDetails: FC<{
  interactionTypeGroupIndex: number;
  interactionTypeIndex: number;
  interactionPairIndex: number;
}> = ({
  interactionTypeGroupIndex,
  interactionTypeIndex,
  interactionPairIndex,
}) => {
  const DrugInteractionDetailsValue: FC<{ value: any }> = (value: any) => {
    const interactionTypeGroup = value?.interactionTypeGroup;
    if (!interactionTypeGroup) {
      return <></>;
    }
    const interactionType =
      interactionTypeGroup[interactionTypeGroupIndex]?.interactionType;
    if (!interactionType) {
      return <></>;
    }
    const interactionPair =
      interactionType[interactionTypeIndex]?.interactionPair;
    if (!interactionPair) {
      return <></>;
    }
    const interactionConcept =
      interactionPair[interactionPairIndex]?.interactionConcept;
    if (!interactionConcept) {
      return <></>;
    }

    return (
      <>
        {interactionConcept.map(({ minConceptItem }: any) => (
          <div key={minConceptItem.rxcui}>{minConceptItem.name}</div>
        ))}
      </>
    );
  };

  return <ConsumeInteractions mapper={DrugInteractionDetailsValue} />;
};
