import React, { FC } from 'react';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

export const DrugInteractionDetails: FC<{
  filterOutRxcui: string;
  indexMapper: () => {
    interactionTypeGroupIndex: number;
    interactionTypeIndex: number;
    interactionPairIndex: number;
  };
}> = ({ filterOutRxcui, indexMapper }) => {
  const DrugInteractionDetailsValue: FC<{ value: any }> = (value: any) => {
    // todo: utility tells component if item was deduped and where to get the other description

    const {
      interactionTypeGroupIndex,
      interactionTypeIndex,
      interactionPairIndex,
    } = indexMapper();

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
        {interactionConcept.map(({ minConceptItem }: any) =>
          minConceptItem.rxcui === filterOutRxcui ? (
            <></>
          ) : (
            <div key={minConceptItem.rxcui}>{minConceptItem.name}</div>
          )
        )}
      </>
    );
  };

  return <ConsumeInteractions mapper={DrugInteractionDetailsValue} />;
};
