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
 }
 module.exports = SignuppagePO