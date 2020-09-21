import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";

export const DrugInteraction = (): JSX.Element => {
    const [genericName, setGenericName] = useState("generic name");
    useAsyncEffect(async () => {
      debugger;
        const interactionsResponse = await fetch("https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=88014");
        const interactions = await interactionsResponse.json();
        const genericName = interactions.interactionTypeGroup[0].interactionType[0].minConceptItem.name;
        setGenericName(genericName);
      }, [])
    return (<h1>Generic Name: {genericName} </h1>);
}