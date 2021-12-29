const pup = require("puppeteer");
const {sleep, randomInteger} = require("./helpers");
const {
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
    addBasketSelector,
    searchButtonSelector,
    paymentMethodSelector,
    paymentSelectmethodSelector,
    paymentPageSelector,
    link
} = require("./constants");


const init = async () => {
    const browser = await pup.launch({
        headless: false,

    });
    const page = await browser.newPage();


    await page.setViewport({
        width: 1920,
        height: 1080
    });
    await page.goto(link, {waitUntil: 'networkidle0'});

    let pageTitle = await page.title();

    if (pageTitle === expectTitle) {
        console.info('Test successful.');
    } else {
        console.info('expected title is different');
    }
    if (await page.waitForSelector(inputId && buttonId)) {
        await page.type(inputId, userContact.email)
        await page.click(buttonId)
        if (await page.waitForSelector(pwId)) {
            await page.type(pwId, userContact.pw)
            await page.click(loginId)
        }
    }

    console.log("Hepsiburada ana sayfa yükleniyor.")
    await sleep("10000")
    console.log("Hepsiburada ana sayfa yüklenidi.")

    await page.waitForSelector(searchButtonSelector);  //Search butonu
    await page.type(searchBoxSelector, "Kitaplar")
    console.log("Kitaplar yazıldı.")

    await page.click(searchButtonSelector)
    console.log("Search butona tıklandi")


    await page.waitForSelector(productList)
    await sleep(2000)
    const products = await page.$$(`${productList} > li`);
    await (products[0]).hover()
    console.log("Listedeki ürünün üzerine gelindi")

    await sleep(1500)
    await page.click(addBasketSelector)
    console.log("Ürün sepete eklendi")

    await page.click(basketSelector)
    console.log("Alışveriş Sepeti Sayfası yüklendi.")


    //Teslimat Sayfası
    await page.waitForSelector(finishShopping)
    console.log("Alışverişi tamamla butonuna tıklandı.")
    await sleep(2000)
    await page.click(finishShopping)
    console.log("devam et butonuna tıklandı.")


    //Ödeme Sayfası
    await sleep(2000)
    await page.waitForSelector(finishShopping)
    await page.click(finishShopping)


    //Ödeme Secenekleri
    await sleep(2000)
    await page.waitForSelector(paymentMethodSelector)
    await page.click(paymentSelectmethodSelector)
    console.log("Anında havale ödeme seçeneği seçildi.")


    await sleep(4000)
    await page.waitForSelector(paymentPageSelector)
    await page.click(`.sardesPaymentPage-MoneyTransfer-money_transfer_container > #payment-money-transfer > .sardesPaymentPage-Accordion-wrapper > .sardesPaymentPage-Accordion-accordion_tab:nth-child(${randomInteger(0, 4)}) > .sardesPaymentPage-Accordion-accordion_header`)
    console.log("Banka random olarak secildi ve tiklandi.")


    await sleep(1000)
    const expectedBank = await page.$eval('#payment-money-transfer > div > div.sardesPaymentPage-Accordion-accordion_tab.sardesPaymentPage-Accordion-active > div.sardesPaymentPage-Accordion-accordion_header > div.sardesPaymentPage-Accordion-header_context > div > div.sardesPaymentPage-MoneyTransfer-bank_description > p.sardesPaymentPage-MoneyTransfer-bank_name', el => el.textContent);
    console.log("1", expectedBank)


    await page.waitForSelector(finishShopping)
    await page.click(finishShopping)


    await sleep(2000)
    const chosenBank = await page.$eval('#app > div > div > div.checkout_container_1gqEI > div > div.main_content_2-tLP > section.payment_summary_1yhmB > div > div > div > div.modal_iban_3J1zO > ul > li > div:nth-child(1) > span:nth-child(2)', el => el.textContent);
    console.log("2", chosenBank)


    if (chosenBank.trim() === expectedBank.trim()) {
        console.log("test sucsess")
    } else {
        console.log("test failed")
    }
    await browser.close();
}

init()