const { test, expect,request } = require('@playwright/test');
const logindata = {hello :"harsha", whatsnect:"dono"}


test('api testing', async ({ request }) => {

const response = request.post('api.... url',
   { 
    data:logindata
    } )
await expect(response.ok()).tobetruthy()
await expect(response.status()).toBe(200)
const loginresponseJson = await response().json()

const token = loginresponseJson.token()

})