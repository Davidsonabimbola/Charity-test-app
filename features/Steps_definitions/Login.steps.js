const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { url } = require("../../common");
 const { test, expect, playwright } = require("@playwright/test");

 let page
   
       
         Given('I am an anonymous user AND I visit the specific Mercy page',{timeout:100*1000}, async ()=> {
            const browser = await chromium.launch({
                headless: false
            });
            const context = await browser.newContext();
            page = await context.newPage();
            await page.goto(url);
            expect(page.locator('[class="container max-w-screen-xl mx-auto px-4"]')).toBeTruthy();
           
         });
       
         When('I click the sign in button on the Top right section', {timeout:100*1000},async()=>{
          const loginButton =await page.locator
          ('[class="px-6 py-4 border-2 border-blue-500 text-blue-500 font-semibold text-lg rounded-xl hover:bg-blue-700 hover:text-white transition ease-linear duration-500"]')
          await loginButton.click()
         })

         Then('I am redirected to the Sign In page',{timeout:100*1000}, async()=>{
            const signIN_message = page.locator('[class="sm:mx-auto sm:w-full sm:max-w-sm"]')
            expect(await signIN_message).toBeTruthy()
            //await page.locator('[id="email"]').fill('Abimbola')
            page.pause()
         })