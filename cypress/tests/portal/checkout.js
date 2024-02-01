const actions = require("../../support/portal/actions/checkoutActions");
const input = require("../../support/portal/inputs/checkoutInput");
const display = require("../../support/portal/displayed/checkoutDisplayed");

beforeEach(() => {
  cy.viewport(1024, 768);
  cy.authenticatePortal();
});

describe("Swag Labs Checkout Flow", () => {
  it("Verify the working of checkout flow", () => {
    actions.clickAddCart();
    cy.scrollTo("top");
    actions.clickCart();
    actions.clickCheckOut();
    input.enterFirstName();
    input.enterLastName();
    input.enterPostalCode();
    actions.clickContiune();
    display.saucecardVerf();
    display.deliveryVerf();
    display.subtotalVerf();
    display.taxVerf();
    display.totalVerf();
    actions.clickFinish();
    display.checkoutTitleVerf();
    display.thanksTextVerf();
    display.orderTextVerf();
  });
});
