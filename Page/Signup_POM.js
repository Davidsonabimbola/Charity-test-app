const { Given, When,Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { url } = require("./common");
 const { test, expect, playwright } = require("@playwright/test");





 class SignuppagePO{
constructor(page){
    this.page = page;
}

async enterFirstName(firstName){
    const firstName_Section = page.locator('[id="user_first_name"]') //FirstName
    // await firstName_Section.fill(firstName)
    await this.page.fill(firstName_Section, firstName) // use this.page.fill before the locator
}

 }
 module.exports = SignuppagePO