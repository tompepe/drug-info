import React from 'react';

export const InteractionDetails = ({ name, description, severity }) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Description: {description}</div>
      <div>Severity: {severity}</div>
    </>
  );
};
