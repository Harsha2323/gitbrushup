const {test,expect} = require('@playwright/test')


test ('date picker entring the date directly', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('02/23/2023')
    await page.waitForTimeout(3000)
})

test.only ('date picker using loop', async({page})=>{
const year = '2025'
const month = 'October'
const date = '23'

await page.goto('https://testautomationpractice.blogspot.com/')


await page.locator('#datepicker').click()  //open the calender
while(true)
{
    const curretYear = await page.locator('.ui-datepicker-year').textContent()
    const curretMonth = await page.locator('.ui-datepicker-month').textContent()

    if(curretYear == year && curretMonth == month)
    {
        break;
    }
    await page.locator('[title="Next"]').click()
    
}

const dates= await page.$$('ui-state-default')
for (let dt of dates)
{
    if(await dt.textContent()==date)
    {
        await dt.click()
        break
    }
}


await page.waitForTimeout(5000)

})


