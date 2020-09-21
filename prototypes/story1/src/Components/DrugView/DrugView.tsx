import React from 'react';

export const DrugView = (): JSX.Element => {
    const [genericName, setGenericName] = React.useState("generic name");
    return (<h1>Generic Name: {genericName} </h1>);
}