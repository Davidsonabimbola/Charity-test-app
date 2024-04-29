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

 }
 module.exports = LoginpagePO