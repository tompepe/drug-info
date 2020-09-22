describe('Drug info', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('display the generic name of a drug', () => {
    cy.findByText(/generic name: rizatriptan/i).as('findRizatriptan');
    cy.get('@findRizatriptan', {
      timeout: 50000,
      requestTimeout: 50000,
      responseTimeout: 100000,
    } as Partial<Cypress.Timeoutable>).should('have.length', 1);
  });
});

