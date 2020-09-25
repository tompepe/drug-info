import { baseUrl } from '../../testUtilities/mockUrl/baseUrl';
import { getSuccessResponse } from '../../testUtilities/mockUrl/interactions';
import { cypressRouteOptions } from '../../testUtilities/cypressRouteOptions';

describe('Drug info', () => {
  let genericDrugName = 'rizatriptan';
  beforeEach(() => {
    if (!Cypress.env('USE_PROD_URL')) {
      genericDrugName = 'test-with-faked-API';
      cy.server();
      cy.route(
        cypressRouteOptions(baseUrl, getSuccessResponse(genericDrugName))
      ).as('getRizatriptan');
    }
    cy.visit('/');
  });

  it('display the generic name of a drug', () => {
    if (!Cypress.env('USE_PROD_URL')) {
      cy.wait('@getRizatriptan', {
        timeout: 50000,
        requestTimeout: 50000,
        responseTimeout: 100000,
      });
    }
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

