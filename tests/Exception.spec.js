const {test, expect}=require("@playwright/test")


test('screenshoddt', async({page})=>{
    try{
await page.goto('https://v3-lts-eetestsystem.tooljet.com/login/qa-automation?redirectTo=/')
await page.locator('#email').fill('test1@tooljet.com')
await page.locator('#password').fill('password')
await page.locator("//span[@class='button-text']").click()
await expect(page.locator("(//button[normalize-space()='Create an app'])")).toBeVisible()
await page.locator("(//button[normalize-space()='Create an app'])").click()
const RandomValue = 'Testing-' + Date.now(); 
await page.locator("//input[@placeholder='Enter app name']").fill(RandomValue)
await page.locator("//button[@type='submit']").click()
await page.locator("(//input[@type='text'])[1]").fill(RandomValue)
await page.locator('//button[@class="driver-close-btn"]').click()
await page.locator("(//input[contains(@class,'')])[9]").click()
}
catch(error)
{
    console.error(error.message)
    throw error       // if we didnt write this line (throw error) this will show has pass even if it fails and it will move for next
}
})

//      error.name       
//      console.log("Error message:", error.message);
//      console.log("Error stack:", error.stack);