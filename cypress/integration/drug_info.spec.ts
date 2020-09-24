describe('Drug info', () => {
  beforeEach(() => {
    const name = '2rizatriptan';
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://rxnav.nlm.nih.gov/REST/interaction/interaction.json*',
      headers: {},
      response: {
        interactionTypeGroup: [
          {
            interactionType: [{ minConceptItem: { name } }],
          },
        ],
      },
      status: 200,
    }).as('getRizatriptan');
    cy.visit('/');
    cy.wait('@getRizatriptan');
  });

  it('display the generic name of a drug', () => {
    cy.findByText(/generic name: 2rizatriptan/i).as('findRizatriptan');
    cy.get('@findRizatriptan', {
      timeout: 50000,
      requestTimeout: 50000,
      responseTimeout: 100000,
    } as Partial<Cypress.Timeoutable>).should('have.length', 1);
  });
});

