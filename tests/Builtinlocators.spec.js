const {test,expect}=require('@playwright/test')

test('builtinlocator', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // .getByAltText -- to locate the logo(piture)
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    // .getByPlaceholder -- to locate the element by useing placeholder
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")


    //.getByRole -- to locate any button, or any action type
    await page.getByRole('button',{type:'submit'}).click()


    //getByText -- to cature the locator by text
   const name =  await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect (page.getByText(name)).toBeVisible()
    



})