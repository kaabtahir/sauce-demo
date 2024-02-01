const actions = require("../support/portal/actions/checkoutActions");
const inputs = require("../support/portal/inputs/checkoutInput");
Cypress.Commands.add("authenticatePortal", () => {
  // TODO: implement login using apis for easy portal login
  cy.visit("/");
  inputs.enterName("standard_user");
  inputs.enterPassword("secret_sauce");
  actions.clickLoginButton();
});
