const userContact = {
    email: "test@test.com",
    pw: "test"
}

const inputId = 'input[id="txtUserName"]'
const buttonId = 'button[id="btnLogin"]'

const searchBoxSelector = '.desktopOldAutosuggestTheme-input'

const pwId = 'input[id="txtPassword"]'
const loginId = 'button[id="btnEmailSelect"]'

const productList = 'ul[id="1"]'

const searchButtonSelector = '.SearchBoxOld-buttonContainer'

const addBasketSelector = 'button[data-test-id="product-info-button"]'
const basketSelector = 'a[class="sf-OldMyAccount-2OvEz sf-OldMyAccount-3TYPj"]'
const finishShopping = 'button[id="continue_step_btn"]'

const expectTitle = 'Üye Giriş Sayfası & Üye Ol - Hepsiburada';

const paymentMethodSelector = '.sardesPaymentPage-index-payment_methods_container > #payment-methods > .sardesPaymentPage-Accordion-wrapper > .sardesPaymentPage-Accordion-accordion_tab:nth-child(2) > .sardesPaymentPage-Accordion-accordion_header'

const paymentSelectmethodSelector = '.sardesPaymentPage-index-payment_methods_container > #payment-methods > .sardesPaymentPage-Accordion-wrapper > .sardesPaymentPage-Accordion-accordion_tab:nth-child(2) > .sardesPaymentPage-Accordion-accordion_header'

const paymentPageSelector = '.sardesPaymentPage-MoneyTransfer-money_transfer_container > #payment-money-transfer > .sardesPaymentPage-Accordion-wrapper > .sardesPaymentPage-Accordion-accordion_tab > .sardesPaymentPage-Accordion-accordion_header'

const link = 'https://giris.hepsiburada.com'

module.exports = {
    link,
    userContact,
    inputId,
    buttonId,
    searchBoxSelector,
    pwId,
    loginId,
    productList,
    basketSelector,
    finishShopping,
    expectTitle,
    searchButtonSelector,
    addBasketSelector,
    paymentMethodSelector,
    paymentSelectmethodSelector,
    paymentPageSelector
}