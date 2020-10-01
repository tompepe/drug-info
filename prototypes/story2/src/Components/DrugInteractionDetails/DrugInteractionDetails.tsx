import React, { FC } from 'react';
import { IndexMap } from '../../Utils/indexMapper';
import { ConsumeInteractions } from '../FetchProviders/InteractionsGet';

export const DrugInteractionDetails: FC<{
  filterOutRxcui: string;
  indexMap: IndexMap;
}> = ({ filterOutRxcui, indexMap }) => {
  const DrugInteractionDetailsValue: FC<{ value: any }> = (value: any) => {
    const interactionTypeGroup = value?.interactionTypeGroup;
    if (!interactionTypeGroup) {
      return <></>;
    }
    const interactionType =
      interactionTypeGroup[indexMap.interactionTypeGroupIndex]?.interactionType;
    if (!interactionType) {
      return <></>;
    }
    const interactionPair =
      interactionType[indexMap.interactionTypeIndex]?.interactionPair;
    if (!interactionPair) {
      return <></>;
    }
    const interactionConcept =
      interactionPair[indexMap.interactionPairIndex]?.interactionConcept;
    if (!interactionConcept) {
      return <></>;
    }

    return (
      <>
        {interactionConcept.map(({ minConceptItem }: any) =>
          minConceptItem.rxcui === filterOutRxcui ? (
            <></>
          ) : (
            <ul key={minConceptItem.rxcui}>
              <li>
                source:
                {
                  interactionTypeGroup[indexMap.interactionTypeGroupIndex]
                    ?.sourceName
                }
              </li>
              {!indexMap.duplicated ? (
                <></>
              ) : (
                <li>
                  source2:
                  {
                    interactionTypeGroup[
                      indexMap.duplicated.interactionTypeGroupIndex
                    ].sourceName
                  }
                </li>
              )}
              <li>drug: {minConceptItem.name}</li>
              <li>
                desc:
                {interactionPair[indexMap.interactionPairIndex]?.description}
              </li>
              {!indexMap.duplicated ? (
                <></>
              ) : (
                <li>
                  desc2:
                  {
                    interactionTypeGroup[
                      indexMap.duplicated.interactionTypeGroupIndex
                    ].interactionType[indexMap.duplicated.interactionTypeIndex]
                      .interactionPair[indexMap.duplicated.interactionPairIndex]
                      .description
                  }
                </li>
              )}
              <li>
                severity:
                {interactionPair[indexMap.interactionPairIndex]?.severity}
              </li>
              {!indexMap.duplicated ? (
                <></>
              ) : (
                <li>
                  severity2:
                  {
                    interactionTypeGroup[
                      indexMap.duplicated.interactionTypeGroupIndex
                    ].interactionType[indexMap.duplicated.interactionTypeIndex]
                      .interactionPair[indexMap.duplicated.interactionPairIndex]
                      .severity
                  }
                </li>
              )}
            </ul>
          )
        )}
      </>
    );
  };

  return <ConsumeInteractions mapper={DrugInteractionDetailsValue} />;
};
