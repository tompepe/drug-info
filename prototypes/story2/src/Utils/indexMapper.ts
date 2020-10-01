/* eslint-disable prettier/prettier */
// todo: change duplicated property into a list of duplicates
export interface IndexMap {
  interactionTypeGroupIndex: number;
  interactionTypeIndex: number;
  interactionPairIndex: number;
  duplicated?: IndexMap; 
  key: number;
}

// todo: replace anys with types
export default (interactionList: any): IndexMap[] => {
  const indexMapList: IndexMap[] = [];
  let key = 0;
  (interactionList?.interactionTypeGroup ?? []).forEach(
    (interactionTypeGroupItem: any, interactionTypeGroupIndex: number) => {
      const interactionType = interactionTypeGroupItem?.interactionType ?? [];

      interactionType.forEach(
        (interactionTypeItem: any, interactionTypeIndex: number) => {
          const interactionPair = interactionTypeItem?.interactionPair ?? [];

          interactionPair.forEach(
            (interactionPairItem: any, interactionPairIndex: number) => {
              key += 1;

              // dedupe
              const rxcuis = interactionPairItem.interactionConcept
                .map(({ minConceptItem }: any) => minConceptItem.rxcui)
                .sort()
                .join();
              const duplicates = indexMapList.filter(
                (x) =>
                  rxcuis ===
                  interactionList.interactionTypeGroup[
                    x.interactionTypeGroupIndex
                  ].interactionType[
                    x.interactionTypeIndex
                  ].interactionPair[
                    x.interactionPairIndex
                  ].interactionConcept
                    .map(({ minConceptItem }: any) => minConceptItem.rxcui)
                    .sort()
                    .join()
              );

              const indexMap: IndexMap = {
                interactionTypeGroupIndex,
                interactionTypeIndex,
                interactionPairIndex,
                key,
              };

              if (duplicates.length) {
                duplicates.forEach((d) => {
                  // eslint-disable-next-line no-param-reassign
                  d.duplicated = indexMap;
                });
              } else {
                indexMapList.push(indexMap);
              }
            }
          );
        }
      );
    }
  );
  return indexMapList;
};
