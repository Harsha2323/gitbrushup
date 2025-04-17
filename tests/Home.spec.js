const { test , expect }=require('@playwright/test');

test('Home page', async({page})=>{

    await page.goto('https://www.demoblaze.com/');
    const pageTitle = await page.title();
    console.log('page title',pageTitle);
    await expect(page).toHaveTitle('STORE');
    const pageurl = await page.url();
    console.log('url is', pageurl);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await page.close();

})