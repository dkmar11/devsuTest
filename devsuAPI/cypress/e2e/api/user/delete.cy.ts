import { routesEndpoint } from "../../../utils/routes";
import { httpMethod } from "../../../utils/httpMethod";
import { dataTest } from "../../../utils/constans";
import {
  userDataFile,
  fixturePath,
  deleteUserSchema,
} from "./constans/userConstans";

describe("user endpoint", async function () {
  before(function () {
    cy.fixture(`${fixturePath}/${userDataFile}`)
      .as(dataTest)
      .then((dataTest) => {
        cy.request(httpMethod.post, routesEndpoint.userEndPoints, dataTest);
      });
    cy.fixture(`${fixturePath}/${deleteUserSchema}`).as(deleteUserSchema);
  });

  it("should be able to delete a user by username", function () {
    cy.request(
      httpMethod.delete,
      `${routesEndpoint.userEndPoints}/${this.dataTest.username}`
    ).then((res) => {
      expect(res.status).equal(200);
      cy.validateSchema(res.body, this.deleteUserSchema);
    });
  });
});
