const {test, expect}=require ('@playwright/test')


test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    
    //locating the login button
    await page.locator('id=login2').click()

    //locating the username and password
    await page.locator('id=loginusername').fill("pavanol")
    await page.fill('id=loginpassword','test@123')

    //clicking on login button
    await page.click("//button[contains(text(),'Log in')]")

    //verifing the logout button
    const logoutlink = await page.locator('id=logout2')
    await expect(logoutlink).toBeVisible();

    //Locating the multiple elements
    page.waitForSelector("//a[@class='hrefch']")//this line is optional,it will load all the link
    const elements = await page.$$("//a[@class='hrefch']")

    for(const productlink of elements)
    {
        const productname = await productlink.textContent();
        console.log(productname);
    }




    await page.close()



})