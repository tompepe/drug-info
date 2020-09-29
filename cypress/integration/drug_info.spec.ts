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

    if (!Cypress.env('USE_PROD_URL')) {
      cy.wait('@getRizatriptan', {
        timeout: 50000,
        requestTimeout: 50000,
        responseTimeout: 100000,
      });
    }
  });

  it('display the generic name of a drug', () => {
    cy.findByText(new RegExp(`generic name: ${genericDrugName}`, 'i')).as(
      'findRizatriptan'
    );
    cy.get('@findRizatriptan').should('have.length', 1);
  });

  it('display drug interaction details', () => {
    cy.findByText(
      /The metabolism of Rizatriptan can be decreased when combined with Procarbazine./i
    ).as('findRizatriptanMetabolism');
    cy.findByText(/Procarbazine/i).as('findProcarbazine');
    cy.findByText(/severity high/i).as('highSeverity');
    cy.findByText(/Triptans - monoamine oxidase (MAO) inhibitors/i).as(
      'monoamineInhibitors'
    );
    cy.get('@findRizatriptanMetabolism').should('have.length', 1);
    cy.get('@findProcarbazine').should('have.length', 1);
    cy.get('@highSeverity').should('have.length', 1);
    cy.get('@monoamineInhibitors').should('have.length', 1);
  });
});
