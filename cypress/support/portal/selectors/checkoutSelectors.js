const selectors = {
  Checkout: {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    login: '[data-test="login-button"]',
    addCart: '[data-test="add-to-cart-sauce-labs-backpack"]',
    cart: ".shopping_cart_link",
    checkout: '[data-test="checkout"]',
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    continue: '[data-test="continue"]',
    finish: '[data-test="finish"]',
    saucecard: ".summary_info > :nth-child(2)",
    delivery: ".summary_info > :nth-child(4)",
    subtotal: ".summary_subtotal_label",
    tax: ".summary_tax_label",
    total: ".summary_total_label",
    checkoutTitle: ".title",
    thanksText: "h2.complete-header",
    orderText: ".complete-text",
  },
};

module.exports = selectors;
