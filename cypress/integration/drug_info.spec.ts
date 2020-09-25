import { buildRequest } from '../../testUtilities/mockUrl/interactions/buildRequest';
import { getSuccessResponse } from '../../testUtilities/mockUrl/interactions/getSuccessResponse';
import { cypressRouteOptions } from '../../testUtilities/mockUrl/cypressRouteOptions';

describe('Drug info', () => {
  const genericDrugName = 'rizatriptan';
  beforeEach(() => {
    cy.server();
    cy.route(
      cypressRouteOptions(
        buildRequest(),
        getSuccessResponse(genericDrugName),
        200
      )
    ).as('getRizatriptan');
    cy.visit('/');
    cy.wait('@getRizatriptan');
  });

  it('display the generic name of a drug', () => {
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

