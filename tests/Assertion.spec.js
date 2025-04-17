const{test, expect}=require ('@playwright/test')

test('assertion', async({page})=>{

    //open the url
await page.goto('https://demo.nopcommerce.com/register')
 // assertion apply to check the url of the page
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

 // assertion apply to check the title of the page
 await expect(page).toHaveTitle('nopCommerce demo store. Register')

 
 const logo = page.locator('.header-logo')
  // assertion apply to check the locator is visible or not
 await expect(logo).toBeVisible()

 const regester = page.locator('id=register-button')
 // assertion apply to check the button in enable state
 await expect(regester).toBeEnabled()

 // for radio button
 const radiobutton = page.locator('id=gender-male')
 await radiobutton.click();
 //assertion apply to check the radio button or check box is selected or not
 await expect(radiobutton).toBeChecked() // for radio button


// for checkbox button
 const checkbox =  page.locator('#Newsletter')

 //assertion apply to check the radio button or check box is selected or not
 await expect(checkbox).toBeChecked() // for radio button


// assertion apply to check the number of elements
const element = await page.locator("//select[@name='DateOfBirthDay']//option")
await expect (element).toHaveCount(32)

//and still some more assertions are there.... 

//     toHaveText --- for to check exact text 
//     toContainText --- for to check partialy, atlist 1 word is present in that sentence or not 



})