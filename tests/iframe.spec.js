const {test,expect}= require("@playwright/test")

test ('frame', async({page})=>{

//o find number of frames
page.goto('')
const framess= page.frame()
console.log(framess)


//approvh 1 usung name or url

const frames1 = page.frame({url: 'http/....'})
frames1.locator('').fill('')
const frames2 = page.frame('name') //if name is present


await page.frameLocator('').locator("locator that present in the frame")//we can give anything like css,xpath to locate the frame




})