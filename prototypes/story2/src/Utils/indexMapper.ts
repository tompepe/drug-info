export interface IndexMap {
  interactionTypeGroupIndex: number;
  interactionTypeIndex: number;
  interactionPairIndex: number;
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

          interactionPair.forEach((_: any, interactionPairIndex: number) => {
            key += 1;
            indexMapList.push({
              interactionTypeGroupIndex,
              interactionTypeIndex,
              interactionPairIndex,
              key,
            });
          });
        }
      );
    }
  );
  return indexMapList;
};
