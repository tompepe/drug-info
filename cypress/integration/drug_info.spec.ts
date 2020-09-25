import { baseUrl } from '../../testUtilities/mockUrl/baseUrl';
import { getSuccessResponse } from '../../testUtilities/mockUrl/interactions';
import { cypressRouteOptions } from '../../testUtilities/cypressRouteOptions';

describe('Drug info', () => {
  const genericDrugName = 'rizatriptan';
  beforeEach(() => {
    cy.server();
    cy.route(
      cypressRouteOptions(baseUrl, getSuccessResponse(genericDrugName))
    ).as('getRizatriptan');
    cy.visit('/');
  });

  it('display the generic name of a drug', () => {
    cy.wait('@getRizatriptan');
    cy.findByText(new RegExp(`generic name: ${genericDrugName}`, 'i')).as(
      'findRizatriptan'
    );
    cy.get('@findRizatriptan', {
      timeout: 50000,
      requestTimeout: 50000,
      responseTimeout: 100000,
    } as Partial<Cypress.Timeoutable>).should('have.length', 1);
  });
});

