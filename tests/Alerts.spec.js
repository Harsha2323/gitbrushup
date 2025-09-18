const {test,expect}=require("@playwright/test")


test("simple alerts",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

page.on("dialog", async dailog =>{
await dailog.accept()
})

await page.locator('#alertBtn').click()
await page.waitForTimeout(3000)

})


test("dismiss alerts",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on("dialog", async dailog =>{
    await dailog.dismiss()
    })
    await page.locator('#confirmBtn').click()
    await page.waitForTimeout(3000)
    
    })

    test("enter input alerts",async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        
        page.on("dialog", async dailog =>{
        await dailog.accept("hello harsha")
        })
        
        await page.locator('#promptBtn').click()
        await page.waitForTimeout(6000)
        
        })