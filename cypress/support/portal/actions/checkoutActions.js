const selectors = require("../selectors/checkoutSelectors");

const clickLoginButton = () => {
  cy.get(selectors.Checkout.login, { timeout: 10000 })
    .should("be.visible")
    .click();
};

const visitBaseUrl = () => {
  cy.visit("/");
};

const clickAddCart = () => {
  cy.get(selectors.Checkout.addCart, { timeout: 10000 })
    .should("be.visible")
    .click();
};

const clickCart = () => {
  cy.get(selectors.Checkout.cart, { timeout: 10000 })
    .should("be.visible")
    .click();
};

const clickCheckOut = () => {
  cy.get(selectors.Checkout.checkout, { timeout: 10000 })
    .should("be.visible")
    .click();
};

const clickContiune = () => {
  cy.get(selectors.Checkout.continue, { timeout: 10000 })
    .should("be.visible")
    .click();
};

const clickFinish = () => {
  cy.get(selectors.Checkout.finish, { timeout: 10000 })
    .should("be.visible")
    .click();
};

module.exports = {
  visitBaseUrl,
  clickLoginButton,
  clickCart,
  clickAddCart,
  clickCheckOut,
  clickContiune,
  clickFinish,
};
