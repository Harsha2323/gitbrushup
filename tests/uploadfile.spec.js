const {test,expect} = require('@playwright/test')


test ('uplaod the single file', async({page})=>{

    await page.goto('https://www.foundit.in')
    await page.locator('upload_button_locator').click()
    await page.locator('uplaad_popupbox_locator').setInputFiles('tests/uploadfile/test2.pdf')

})


test ('uplaod the multiple file', async({page})=>{
    await page.goto('https://www.foundit.in')
    await page.locator('upload_button_locator').click()
    await page.locator('uplaad_popupbox_locator').setInputFiles(['tests/uploadfile/test2.pdf','tests/uploadfile/testfile1.pdf'])
})