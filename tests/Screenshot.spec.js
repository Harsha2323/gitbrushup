const {test, expect}=require("@playwright/test")
const path = require("path")




test('screenshot', async({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'harsh.png', fullPage: true } )

})

test('screenshot of perticular element', async({page})=>{
 
    await page.goto("https://testautomationpractice.blogspot.com/")
   const buttonns=  page.locator('#confirmBtn')
    await buttonns.screenshot({path: 'harrs.png'})

})