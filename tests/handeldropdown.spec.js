const {test,expect}=require('@playwright/test')

test('handel dropdown', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('#country').selectOption({index:2})  //using index
  await page.locator('#country').selectOption({label: 'India'})   //using lable
  await page.locator('#country').selectOption('India')  //visibletext
  await page.locator('#country').selectOption({value: 'uk'})   // by using value
  await page.selectOption('#country','India') // by visible text (india)

   await page. waitForTimeout(5000);

    


   //store the variable in the Object 
    // pass it in the loop
    //for(let opt1 of option)
  //  {
    //    const value = opt1.textcontent()
     //   if(value.includes('harsha'))
    //    {
    //       await opt1.click()
   //     }
 //   }
})

