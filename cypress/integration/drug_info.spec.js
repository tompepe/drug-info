const screen = cy;

describe('Drug info', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('display the generic name of a drug', async () => {
    screen.findByText(/generic name: rizatriptan/i).as('findRizatriptan');
    await cy.wait('findRizatriptan', {timeout: 50000, requestTimeout: 50000, responseTimeout: 50000});
  });
})
