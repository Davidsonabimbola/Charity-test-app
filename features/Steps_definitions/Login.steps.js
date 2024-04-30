const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { url } = require("../../common");
 const { test, expect, playwright } = require("@playwright/test");
 const LoginPage = require ('../../Page/Login_POM')

 let page
 let loginpagePO
   
       
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
         })

          When('I indicate correct email {string}', {timeout:100*1000}, async(email)=>{
            // await page.locator('[id="email"]').fill(email)
            loginpagePO = new LoginPage(page)
            await loginpagePO.enterEmail(email)
          })

          When('I indicate correct password {string}',{timeout:100*1000}, async(password)=>{
            await page.locator('[id="password"]').fill(password)
          })
          When('I submit the form',{timeout:100*1000},async()=>{
            const Signin_button = await page.locator('[class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]')
            await Signin_button.click()
          })
          Then('I am redirected to the exact User Profile page',{timeout:100*1000},async()=>{
            const received_message = await page.locator('[class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"]')
            expect(await received_message).toBeTruthy()
            console.log(await received_message.textContent())
            
          })