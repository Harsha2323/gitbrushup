const {test,expect}=require("@playwright/test")

let token = 'abcd' // declaring here because it should get acces to other test also


test("session storage",async({page})=>{

//we will do session storage with the help of javascriot


page.addInitScript(
    value => {window.localStorage.setItem('token', value)},token
    )

})