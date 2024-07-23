import Ajv from "ajv";
const ajv = new Ajv();

// Añadir un comando personalizado para la validación del esquema
Cypress.Commands.add("validateSchema", (response, schema) => {
  cy.log("validating schema");
  const validate = ajv.compile(schema);
  const valid = validate(response);
  if (!valid) {
    throw new Error("Response does not match schema: " + JSON.stringify(validate.errors));
  }
});
