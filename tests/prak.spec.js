const {test,expect}=require("@playwright/test")


test("validating page",async({page})=>{
await page.goto('https://demoqa.com/')
await expect(page).toHaveTitle('DEMOQA')
await expect(page).toHaveURL('https://demoqa.com/')
await page.locator("(//h5)[1]").click()
await page.waitForTimeout(3000)
await page.locator("(//li[@id='item-0'])[1]").click()
})


test("textbox",async({page})=>{
    await page.goto('https://demoqa.com/')
    await page.locator("(//h5)[1]").click()
    await page.locator("(//li[@id='item-0'])[1]").click()
    await page.locator('#userName').fill("harsha")
    await page.locator('#userEmail').fill("harsha@nn.com")
    await page.locator('#currentAddress').fill("bang bang")
    await page.locator('#permanentAddress').fill("nagara")
    await page.locator('#submit').click()
// Assertion
    await expect(page.locator('#name')).toContainText('harsha')
    await expect(page.locator('#email')).toContainText('nn')
    await expect(page.locator("//p[@id='currentAddress']")).toContainText('bang bang')
    await expect(page.locator("//p[@id='permanentAddress']")).toContainText('nagara')    
    })


    test("checkbox",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.locator("(//h5)[1]").click()
        await page.locator("(//li[@id='item-1'])[1]").click()
        await page.locator('//button[@title="Expand all"]').click()
        await page.locator("//span[contains(text(),'React')]").click()
        await page.locator("//span[contains(text(),'Private')]").check()
        await page.locator('//label[@for="tree-node-downloads"]').check()
        await page.locator("//span[contains(text(),'React')]").uncheck()
        //assertion
        await expect(page.locator('//label[@for="tree-node-downloads"]')).toBeChecked()
        expect(await page.locator("//span[contains(text(),'Private')]").isChecked()).toBeTruthy()
        expect(await page.locator("//span[contains(text(),'React')]").isChecked()).toBeFalsy()

    })



    test("Radio buttons",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.locator("(//h5)[1]").click()
        await page.locator("(//li[@id='item-2'])[1]").click()
        expect( page.locator("(//label)[1]").isEnabled).toBeTruthy()      
        await page.locator("(//label)[1]").check()
        expect(await page.locator("(//label)[1]").isChecked()).toBeTruthy()
        await expect(page.locator("(//label)[2]").isEnabled).toBeTruthy()      
        await page.locator("(//label)[2]").check()
        expect(await page.locator("(//label)[2]").isChecked()).toBeTruthy()
        await expect(page.locator("(//label)[3]").isDisabled()).toBeTruthy()      
       // expect(await page.locator("(//label)[3]").isChecked()).toBeTruthy()

    })

    test("buttons",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.locator("(//h5)[1]").click()
        await page.locator("(//li[@id='item-4'])[1]").click()
        await page.locator("#doubleClickBtn").dblclick()
        await page.locator("#rightClickBtn").click( {button:'right'} )
        await page.locator("//button[text()='Click Me']").click()
        //Assertions
        await expect(page.locator("#doubleClickMessage")).toContainText('double click')
        await expect(page.locator("#rightClickMessage")).toContainText('right click')
        await expect(page.locator("#dynamicClickMessage")).toContainText('dynamic click')

    })

    test.only("web Table",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.locator("(//h5)[1]").click()
        await page.locator("(//li[@id='item-3'])[1]").click()
        const table =  page.locator('.ReactTable')
        const column = table.locator('.rt-resizable-header')
    // const row = page.locator('//div[@role="gridcell"]')
        const row = page.locator('//div[@role="row"]')
        console.log("hello count "+await column.count())
        console.log("hello row "+await row.count())

//selecting single row
        
        const match = row.filter({
            has: page.locator('//div[@role="gridcell"]'),
            hasText: 'Gentry'
        })
      await match.locator('//span[@title="Edit"]').click()
      await page.waitForTimeout(4000)
      await page.locator('//button[@type="submit"]').click()
      await page.waitForTimeout(4000)
      //selecting multiple rowes
      //await selectmultiple(row,page,'Gentry')
      await selectmultiple(row,page,'Cantrell')

      async function selectmultiple(row, page , name)
      {
        const match = row.filter({
            has: page.locator('//div[@role="gridcell"]'),
            hasText: name
        })
      await match.locator('//span[@title="Edit"]').click()
      await page.locator('//button[@type="submit"]').click()
      }

    })
    test("goback and go forword",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.goto('https://www.youtube.com/')
        await page.goBack()
        await page.goForward()
    })
    test("links",async({browser})=>{
        const Context =await browser.newContext()
        const page = await Context.newPage()
        await page.goto('https://demoqa.com/')
        await page.locator("(//h5)[1]").click()
        await page.locator("(//li[@id='item-5'])[1]").click()
        //open new tab and switching to that tab
        const samepageopening = page.locator('#simpleLink')
        const [newPage]=await Promise.all([
        Context.waitForEvent('page'),// leasen for the new page
        samepageopening.click()]) //open the new page
        await newPage.locator("(//h5)[1]").click()
        await newPage.waitForTimeout(3000)

    })
    test("dropdown",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.locator('(//div[@class="card mt-4 top-card"])[2]').click()
        await page.locator("//span[text()='Practice Form']").click()
    //  await expect(page.locator('#city')).toBeHidden()
        await page.locator("//div[@class=' css-yk16xz-control']").click();
        await page.locator('#react-select-3-option-3').click()
        await expect(page.locator('#city')).toBeEnabled()
        await page.locator('#city').click()
        await page.locator('#react-select-4-option-0').click()
        await page.waitForTimeout(5000)
    })

    test("date picker",async({page})=>{
        await page.goto('https://demoqa.com/')
        await page.locator('(//div[@class="card mt-4 top-card"])[4]').click()
        await page.locator("//span[text()='Date Picker']").click()
        await page.locator('#dateAndTimePickerInput').click()
        while(true)
        {
            const currentdate = await page.locator('.react-datepicker__current-month').textContent()
            const futuredate = 'April 2029'
            if (currentdate==futuredate)
                {
                    break;
                }
                await page.locator("//button[text()='Next Month']").click()
        }
        await page.locator('.react-datepicker__day--009').click()
        await page.locator("//li[text()='23:15']").click()
        await page.waitForTimeout(5000);
        const selectedDate = await page.locator('#dateAndTimePickerInput').inputValue()
        expect(selectedDate).toContain('April 9, 2029 11:15 PM')
    })

    test.only("select dropdpwn",async({page})=>{

        await page.goto('https://demoqa.com/')
        await page.locator('(//div[@class="card mt-4 top-card"])[4]').click()
        await page.locator("//span[text()='Select Menu']").click()
        await page.locator('#oldSelectMenu').selectOption({value : 'red'})
        await page.waitForTimeout(5000);
    })


    test('api',async({page})=>{



    })