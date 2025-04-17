const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/')

//handling single checkbox
await expect(await page.locator('id=sunday')).toBeEnabled()
await expect(await page.locator('id=sunday')).toBeVisible()
await expect(await page.locator('id=sunday')).not.toBeChecked()
await expect.soft(await page.locator('id=sunday').isChecked()).toBeFalsy()

//await page.locator('id=sunday').check()
await page.locator('id=sunday').click()
//await page.waitForTimeout(2000)
await expect(await page.locator('id=sunday')).toBeChecked()
await expect(await page.locator('id=sunday').isChecked()).toBeTruthy()

//uncheck the checkbox
await page.locator('id=sunday').click()

await expect(await page.locator('id=sunday')).not.toBeChecked()
await expect.soft(await page.locator('id=sunday').isChecked()).toBeFalsy()



//handling multiple checkbox

const checkboxlocator = ['id=monday','id=tuesday','id=thursday','id=saturday'];

for(const mcheckbox of checkboxlocator)
{
    await page.locator(mcheckbox).check();
}
await expect(await page.locator('id=monday')).toBeChecked()
await expect(await page.locator('id=tuesday')).toBeChecked()
await page.waitForTimeout(1000)


// touncheck the selected check box

for(const mcheckbox of checkboxlocator)
    {
        if(await page.locator(mcheckbox).isChecked()) // checking if it is checked, then only perform the uncheck
        {                        // wehave to use  '.ischeck'  because it will return true or false
        await page.locator(mcheckbox).uncheck();
        }
    }
    await expect( page.locator('id=monday')).not.toBeChecked()
    await expect( page.locator('id=tuesday')).not.toBeChecked()
    await page.waitForTimeout(1000)

})

// == you can use this in the array form [] to declare the list of selector

//'id=submitBtn'	Find element with id="submitBtn"
//'text=Login'	Find element that contains the text Login
//'css=.my-class'	Use CSS selector
//'xpath=//div[@id="monday"]'	Use XPath
//'input[type="checkbox"]'	Also valid (CSS)