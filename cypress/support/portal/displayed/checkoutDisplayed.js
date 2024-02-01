const selectors = require("../selectors/checkoutSelectors");

const saucecardVerf = () => {
  cy.get(selectors.Checkout.saucecard)
    .should("be.visible")
    .should("have.text", "SauceCard #31337");
};

const deliveryVerf = () => {
  cy.get(selectors.Checkout.delivery)
    .should("be.visible")
    .should("have.text", "Free Pony Express Delivery!");
};

const subtotalVerf = () => {
  cy.get(selectors.Checkout.subtotal)
    .should("be.visible")
    .should("have.text", "Item total: $29.99");
};

const taxVerf = () => {
  cy.get(selectors.Checkout.tax)
    .should("be.visible")
    .should("have.text", "Tax: $2.40");
};

const totalVerf = () => {
  cy.get(selectors.Checkout.total)
    .should("be.visible")
    .should("have.text", "Total: $32.39");
};

const checkoutTitleVerf = () => {
  cy.get(selectors.Checkout.checkoutTitle)
    .should("be.visible")
    .should("have.text", "Checkout: Complete!");
};

const thanksTextVerf = () => {
  cy.get(selectors.Checkout.thanksText)
    .should("be.visible")
    .should("have.text", "Thank you for your order!");
};

const orderTextVerf = () => {
  cy.get(selectors.Checkout.orderText)
    .should("be.visible")
    .should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
};

module.exports = {
  saucecardVerf,
  taxVerf,
  totalVerf,
  deliveryVerf,
  subtotalVerf,
  orderTextVerf,
  thanksTextVerf,
  checkoutTitleVerf,
};
