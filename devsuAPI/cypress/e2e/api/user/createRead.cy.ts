import { routesEndpoint } from "../../../utils/routes";
import { httpMethod } from "../../../utils/httpMethod";
import { dataTest } from "../../../utils/constans";
import {
  userDataFile,
  fixturePath,
  createUserSchema,
  getUserSchema
} from "./constans/userConstans";

describe("user endpoint", async function () {
  beforeEach(function () {
    cy.fixture(`${fixturePath}/${userDataFile}`).as(dataTest);
    cy.fixture(`${fixturePath}/${createUserSchema}`).as(createUserSchema);
    cy.fixture(`${fixturePath}/${getUserSchema}`).as(getUserSchema);
  });

  after(function () {
    cy.request(
      httpMethod.delete,
      `${routesEndpoint.userEndPoints}/${this.dataTest.username}`
    );
  });

  it("should be able to create a user", function () {
    cy.request(
      httpMethod.post,
      routesEndpoint.userEndPoints,
      this.dataTest
    ).then((res) => {
      expect(res.status).equal(200);
      cy.validateSchema(res.body, this.createUserSchema);
    });
  });

  it("should be able to get a user by username", function () {
    cy.request(
      httpMethod.get,
      `${routesEndpoint.userEndPoints}/${this.dataTest.username}`
    ).then((res) => {
      expect(res.status).equal(200);
      expect(res.body).to.deep.include(this.dataTest);
      cy.validateSchema(res.body, this.getUserSchema);
    });
  });
});
