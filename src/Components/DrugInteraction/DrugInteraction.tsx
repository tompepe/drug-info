import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

export const DrugInteraction = (): JSX.Element => {
  const [genericName, setGenericName] = useState('.');
  useAsyncEffect(async () => {
    // this is evil but I need to verify I /can/ get green by EOD
    // await new Promise((res) => setTimeout(res, 1000));
    // setGenericName('caffeine');
    
    // this is evil but I need to verify I /can/ get green by EOD
    const interactionsResponse = await fetch(
      'http://127.0.0.1:8080/'
      // 'https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=88014'
    );
    const interactions = await interactionsResponse.json();
    const responseGenericName =
      interactions.interactionTypeGroup[0].interactionType[0].minConceptItem
        .name;
    setGenericName(responseGenericName);
  }, []);
  return <h1>Generic Name: {genericName}</h1>;
};
