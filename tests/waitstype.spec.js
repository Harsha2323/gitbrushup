const {test,expect}= require("@playwright/test")

test ('', async({page})=>{
 await page.goto('')

 await page.waitForEvent()


 await page.waitForFunction()  //Wait until an element with the text "Loaded" appears


 await page.waitForLoadState('networkidle') //Wait until the network is idle


 await page.waitForSelector('button#submit', { state: 'visible' }) // wait for specific to be appear


 await page.waitForTimeout()


 await page.waitForURL()



})