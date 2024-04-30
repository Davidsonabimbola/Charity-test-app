const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
//const { url } = require("../../common");
 const { test, expect, playwright } = require("@playwright/test");

 class LoginpagePO{
    constructor(page){
        this.page = page;
    }

async enterEmail(email){
    this.page.fill('[id="email"]',email)
}



// async showProfile_page(){
//     const received_message = await page.locator('[class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"]')
//     expect(await received_message).toBeTruthy()
//     console.log(await received_message.textContent())
// }
 }
 module.exports = LoginpagePO