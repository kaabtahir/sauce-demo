const selectors = require("../selectors/checkoutSelectors");

const enterName = (name) => {
  cy.get(selectors.Checkout.username)
    .should("be.visible")
    .type(name);
};

const enterPassword = (password) => {
  cy.get(selectors.Checkout.password)
    .should("be.visible")
    .type(password);
};

const enterFirstName = () => {
  cy.get(selectors.Checkout.firstName)
    .should("be.visible")
    .type('TestFirstName');
};

const enterLastName = () => {
  cy.get(selectors.Checkout.lastName)
    .should("be.visible")
    .type('TestLastName');
};

const enterPostalCode = () => {
  cy.get(selectors.Checkout.postalCode)
    .should("be.visible")
    .type('1234');
};

module.exports = {
  enterName,
  enterPassword,
  enterFirstName,
  enterLastName,
  enterPostalCode
};
