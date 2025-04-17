const {test, expect}=require("@playwright/test")


test('screenshoddt', async({page})=>{
    await page.goto('https://example.com');

    // Wait until an element with the text "Loaded" appears
    await page.waitForFunction(() => document.body.innerText.includes('Loaded'));

    console.log("Page contains the word 'Loaded'");
    await browser.close();
});
