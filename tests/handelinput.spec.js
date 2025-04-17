const { test, expect } = require('@playwright/test');



test.describe.configure({mode:'parallel'}) // to run all the test in parallel

test('has title', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/')

//input box --name
await expect(page.getByPlaceholder('Enter Name')).toBeVisible()
await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()
await expect(page.getByPlaceholder('Enter Name')).toBeEditable()
await expect(page.getByPlaceholder('Enter Name')).toBeEnabled()

const firstname = await page.locator('id=name')
await firstname.fill('harsha')

await page.waitForTimeout(3000)   //forpasuing the page

await expect(firstname).toHaveValue('harsha') //to make sure entered value is present or not
//////////////////////////////////////


//radiobutton
await expect(page.locator('id=male')).toBeEnabled()
await expect(page.locator('id=male')).toBeEnabled()
await expect(page.locator('id=male')).toBeVisible()
await expect.soft(page.locator('id=male')).not.toBeChecked()

//await page.locator('id=male').check()    //(we can use 'check' or 'click')
const radiobuttons =await page.locator('id=male')
await radiobuttons.check()
//await radiobuttons.click()

await expect(page.locator('id=male')).toBeChecked()
await expect(page.locator('id=male').isChecked).toBeTruthy()



})