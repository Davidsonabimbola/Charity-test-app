const { Given, When,Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
// const { url } = require("./common");
 const { test, expect, playwright } = require("@playwright/test");





 class SignuppagePO{
constructor(page){
    this.page = page;
}

async enterFirstName(firstName){
    this.page.fill('[id="user_first_name"]',firstName)
}

async enterLastName(lastName){
    this.page.fill('[id="user_last_name"]',lastName)
}

async enterEmailAddress(email){
    this.page.fill('[id="user_email"]',email)
}

async enterPassword(password){
    this.page.fill('[id="user_password"]',password)
}

async enterConfirmPassword(confirmPassword){
this.page.fill('[id="user_password_confirmation"]', confirmPassword)
}


// async clickSignUpButton() {
//     const signUpButton = await this.page.locator('[class="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]');
//     await signUpButton.click();
// }

 }
 module.exports = SignuppagePO