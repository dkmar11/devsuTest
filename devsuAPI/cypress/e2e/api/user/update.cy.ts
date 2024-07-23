
import { routesEndpoint } from "../../../utils/routes";
import { httpMethod } from "../../../utils/httpMethod";
import { lastResponse } from "../../../utils/constans";
import {
  userDataFile,
  fixturePath,
  userDataUpdatedFile,
  updateUserSchema,
  getUserSchema,
} from "./constans/userConstans";

describe("user endpoint", async function () {
  before(function () {
    cy.fixture(`${fixturePath}/${userDataFile}`).then((dataTest) => {
      cy.request(httpMethod.post, routesEndpoint.userEndPoints, dataTest).as(
        lastResponse
      );
    });
  });

  beforeEach(function () {
    cy.fixture(`${fixturePath}/${userDataUpdatedFile}`).as(userDataUpdatedFile);
    cy.fixture(`${fixturePath}/${updateUserSchema}`).as(updateUserSchema);
    cy.fixture(`${fixturePath}/${getUserSchema}`).as(getUserSchema);
  });

  after(function () {
    cy.request(
      httpMethod.delete,
      `${routesEndpoint.userEndPoints}/${this.userDataUpdated.username}`
    );
  });

  it("should be able to update a user by username", function () {
    this.userDataUpdated.id = this.lastResponse.body.message;
    cy.request(
      httpMethod.put,
      `${routesEndpoint.userEndPoints}/${this.userDataUpdated.username}`,
      this.userDataUpdated
    ).then((res) => {
      expect(res.status).equal(200);
      cy.validateSchema(this.lastResponse.body, this.updateUserSchema);
    });
  });

  it("should be able to get the user updated", function () {
    cy.request(
      httpMethod.get,
      `${routesEndpoint.userEndPoints}/${this.userDataUpdated.username}`
    ).then((res) => {
      expect(res.status).equal(200);
      expect(res.body).to.deep.include(this.userDataUpdated);
      cy.validateSchema(res.body, this.getUserSchema);
    });
  });
});

