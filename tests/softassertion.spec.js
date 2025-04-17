const {test, expect}=require('@playwright/test')

test('softassertion', async({page})=>{


    //open the url
    await page.goto('https://demo.nopcommerce.com/register')


// assertion apply to check the number of elements (soft assertion)
//in soft assertion, if the conduction is faild then also it will execute the next peace of code
const elementmonth = page.locator("//select[@name='DateOfBirthMonth']/option")
await expect.soft(elementmonth).toHaveCount(130) //130 is incorrect, but still it will 
                                                //countinu the execution by faling that text case



    // assertion apply to check the number of elements (wantedly failing this test)
    //because in heard assertion if the expection is field, it wont execute next peace of code
const elementdays = await page.locator("//select[@name='DateOfBirthDay']//option")
await expect (elementdays).toHaveCount(32)






})