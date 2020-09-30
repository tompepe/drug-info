import React, { FC } from 'react';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

export const DrugInteractionDetails: FC<{
  filterOutRxcui: string;
  indexMap: {
    interactionTypeGroupIndex: number;
    interactionTypeIndex: number;
    interactionPairIndex: number;
  };
}> = ({ filterOutRxcui, indexMap }) => {
  const DrugInteractionDetailsValue: FC<{ value: any }> = (value: any) => {
    const {
      interactionTypeGroupIndex,
      interactionTypeIndex,
      interactionPairIndex,
    } = indexMap;

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
