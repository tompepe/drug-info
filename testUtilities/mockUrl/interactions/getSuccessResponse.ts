export const getSuccessResponse = (name: string): any => ({
  interactionTypeGroup: [
    {
      interactionType: [{ minConceptItem: { name } }],
    },
  ],
});
