import React, { useState, createContext } from 'react';
import useAsyncEffect from 'use-async-effect';

// todo: consider generic type that gets rxcui and [possibly the whole URL from properties]
const InteractionsGetContext = createContext({} as any);
export const InteractionsGetConsumer = InteractionsGetContext.Consumer;
export const ConsumeInteractions: React.FC<{ mapper: React.FC<any> }> = ({
  mapper,
}) => {
  return (
    <InteractionsGetConsumer>
      {(value) => mapper(value)}
    </InteractionsGetConsumer>
  );
};

export const InteractionsGetProvider: React.FC = (props = {}) => {
  const rxcui = '88014';
  const { children } = props ?? {};
  const [interactions, setInteractions] = useState({} as any);
  useAsyncEffect(async () => {
    const interactionsResponse = await fetch(
      `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`
    );
    setInteractions(await interactionsResponse.json());
  }, []);

  return (
    <InteractionsGetContext.Provider value={interactions}>
      {children}
    </InteractionsGetContext.Provider>
  );
};
export default InteractionsGetProvider;
