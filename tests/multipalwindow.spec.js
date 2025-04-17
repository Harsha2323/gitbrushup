const {test,expect,chromium}=require('@playwright/test')




test('handling multiple window', async({})=>{

const browser = await chromium.launch()
const context = await browser.newContext()
                                 //--multiple page
const page1 = await context.newPage()
const page2 = await context.newPage()

await page1.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page2.goto('https://www.orangehrm.com/')
})




test.only('handling multipal window', async({})=>{

   const browser = await  chromium.launch()
    const context = await browser.newContext()                                   
    const page = await context.newPage()

    
    await page.goto ('https://rahulshettyacademy.com/loginpagePractise/')
    const document = page.locator("[href='https://rahulshettyacademy.com/documents-request']")

    // call this below line befor the chld window open, if we call this after the click, it wont get knowledge of child window
        // we have 3 types of promis == fullfilll, pending, reject
    const [newPage]= await Promise.all(   // has this promis is array, we have to store it in array form
        [                           // we have 2 operation in the array  context is retuing "newpage" and click is just event
        context.waitForEvent('page'),   // so mention that in the array while storing like ""const[newpage]""
        document.click()      
        ])
        //we call this as assynccronou steps--------------- for the above promiss

        
        const text = await newPage.locator('.red').textContent()
        console.log(text)








    })

