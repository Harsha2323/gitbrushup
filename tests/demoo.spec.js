const {test,expect}=require('@playwright/test')

test('Login page',async({page})=>{

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
await page.locator("(//button[contains(@class,'')])[9]").click()

// draging and droping the button compomnt
await page.dragAndDrop("(//center)[2]","#real-canvas")
await page.waitForTimeout(2000)

//verify that draged button is displaying in the canvas Section
await expect(page.locator('//div[@role="Box"]')).toBeVisible()
 
//verifying the button is enabled for clicking
await expect(page.locator('//div[@role="Box"]')).toBeEditable()

//verifying user is able to change the text value of the button
await page.locator("(//div[@class='cm-line'])[1]").fill('rename')
await page.locator('#real-canvas').click()
await page.locator('//div[@role="Box"]').click()

//verify that user is able to change the colour
await page.locator('#inspector-tab-styles').click()
await page.locator('//div[@data-cy="background-value"]').click()
await page.locator('//div[@title="#F5A623"]').click()
await page.locator('#real-canvas').click()
await page.locator('//div[@role="Box"]').click()

//verifying to delete the button
await page.locator('//div[@role="Box"]').click()
await page.locator("//img[contains(@role,'button')]").click()

//verfy user is able to add multiple buttons (Adding buttons for 2 times)
await page.dragAndDrop("(//center)[2]","#real-canvas")
await page.locator('#real-canvas').click()
await page.dragAndDrop("(//center)[2]","#real-canvas")

})