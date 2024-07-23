/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to validate schema of an API response.
     * @param response The API response body.
     * @param schema The JSON schema to validate against.
     */
    validateSchema(response: any, schema: object): Chainable<void>;
  }
}
