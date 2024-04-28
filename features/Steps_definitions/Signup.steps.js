// const { Given, When,Then } = require("@cucumber/cucumber");
const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { url } = require("../../common");
 const { test, expect, playwright } = require("@playwright/test");
    const SignuppagePO = require("../../Page/Signup_POM")

 let page
   let signuppagePO
       
         Given('I am an anonymous user AND I visit the Mercy page',{timeout:100*1000}, async ()=> {
            const browser = await chromium.launch({
                headless: false
            });
            const context = await browser.newContext();
            page = await context.newPage();
            await page.goto(url);
            expect(page.locator('[class="container max-w-screen-xl mx-auto px-4"]')).toBeTruthy();
           
         });
       
       
         When('I click the Sign Up button on the Top Right section',{timeout:100*1000}, async ()=> {
            await page.locator('[class="px-6 py-4 bg-blue-500 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500 mb-5 md:mb-0"]').click()
    await page.waitForLoadState()
         });
        
         Then('I am redirected to the Sign Up page', async ()=> {
            expect(await page.locator('[class="space-y-6"]')).toBeTruthy()
         });


        When('I fill in the first name {word} correctly',{timeout:100*1000},async(firstName)=>{
            // const firstName_Section = page.locator('[id="user_first_name"]') //FirstName
            // await firstName_Section.fill(firstName)
             signuppagePO = new SignuppagePO(page);
             await signuppagePO.enterFirstName(firstName)
        })

        When('I fill in the last name {word} correctly',{timeout:100*1000},async(lastName)=>{
            // const lastName_Section = page.locator('[id="user_last_name"]') //LastName
            // await lastName_Section.fill(lastName)
            signuppagePO = new SignuppagePO(page);
            signuppagePO.enterLastName(lastName)
        })

        When('I fill in the email {word} correctly',{timeout:100*1000},async(emailAddress)=>{
//             const email_Section = page.locator('[id="user_email"]') //Email
// await email_Section.fill(emailAddress)
            signuppagePO = new SignuppagePO(page);
            signuppagePO.enterEmailAddress(emailAddress)
        })

        When('I fill in the password {word} correctly',{timeout:100*1000},async(password)=>{
            // const password_Section = page.locator('[id="user_password"]') //Password
            // await password_Section.fill(password)
            signuppagePO = new SignuppagePO(page);
            signuppagePO.enterPassword(password)
        })

        When('I fill in the confirm password {word} correctly',{timeout:100*1000},async(confirmPassword)=>{
//             const confirmPassword_Section = page.locator('[id="user_password_confirmation"]') //Confirm Password
// await confirmPassword_Section.fill(confirmPassword)
            signuppagePO = new SignuppagePO(page);
            signuppagePO.enterConfirmPassword(confirmPassword)
        })

        When('I submit the Form', {timeout:100*1000},async()=>{
            const signUp_Button =await  page.locator('[class="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]')
            await signUp_Button.click() //click sign up button
            // signuppagePO = new SignuppagePO(page);
            // signuppagePO.clickSignUpButton()
        })

        Then('I am redirected to the User Profile page',{timeout:100*1000}, async()=>{
            const message_Section =  await page.locator('[class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"]')
            expect(await message_Section).toBeTruthy()
// await page.pause()
        })

        When('I fill in the specific first name {string} correctly',async(firstName)=>{
            // const firstName_Section = page.locator('[id="user_first_name"]') //FirstName
            // await firstName_Section.fill(firstName)
            signuppagePO = new SignuppagePO(page);
         await signuppagePO.enterFirstName(firstName)
        })

        When('I fill in the specific last name {string} correctly',async(lastName)=>{
            const lastName_Section = page.locator('[id="user_last_name"]') //LastName
            await lastName_Section.fill(lastName)
        })

        // When('I fill in the email {string} correctly',async(email)=>{
        //     const lastName_Section = page.locator('[id="user_last_name"]') //LastName
        //     await lastName_Section.fill(lastName)
        // })

        When('I fill in the specific password {string} correctly',async(password)=>{
            const password_Section = page.locator('[id="user_password"]') //Password
            await password_Section.fill(password)
        })

        When('I fill in the specific confirm password  {string} correctly', async (confirmPassword)=> {
            const confirmPassword_Section = page.locator('[id="user_password_confirmation"]') //Confirm Password
            await confirmPassword_Section.fill(confirmPassword)
          });

        // When('I fill in the specific confirm password {string} correctly',async(confirmPassword)=>{
        //     const confirmPassword_Section = page.locator('[id="user_password_confirmation"]') //Confirm Password
        //     await confirmPassword_Section.fill(confirmPassword)
        // })


        Then('I get an error message indicating that the field is required', async()=>{
            const form_invalid = await page.locator('[class="font-medium"]')
            const invalid_message = await form_invalid.textContent()
            console.log(invalid_message)
            const email_invalid = await page.locator('[class="mt-1.5 ml-4 list-disc list-inside"]')
            const email_invalidListed1 = email_invalid.locator('li').nth(0)
            const email_invalidListed2 = email_invalid.locator('li').nth(1)
            const email_invalidMessage1 = await email_invalidListed1.textContent()
            const email_invalidMessage2 = await email_invalidListed2.textContent()
            console.log(email_invalidMessage1)
            console.log(email_invalidMessage2)
            page.pause()
            expect(form_invalid).toBeTruthy()
        })

