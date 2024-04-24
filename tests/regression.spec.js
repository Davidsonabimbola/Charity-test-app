const {test, expect} = require('@playwright/test')

test('Successful sign up by new user', async({page})=>{
    const toast_message = 'Thank you for signing up!'
    await page.goto('https://qa-hiring-test-beefea47e73c.herokuapp.com/')
    expect(page.locator('.container')).toBeTruthy();
    await page.locator('[class="px-6 py-4 bg-blue-500 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500 mb-5 md:mb-0"]').click()
    await page.waitForLoadState()
expect(await page.locator('[class="space-y-6"]')).toBeTruthy()
const firstName_Section = page.locator('[id="user_first_name"]') //FirstName
await firstName_Section.fill('Bobrisky')
const lastName_Section = page.locator('[id="user_last_name"]') //LastName
await lastName_Section.fill('Idris')
const email_Section = page.locator('[id="user_email"]') //Email
await email_Section.fill('Idris_bob007@yahoo.com')
const password_Section = page.locator('[id="user_password"]') //Password
await password_Section.fill('12345bob')
const confirmPassword_Section = page.locator('[id="user_password_confirmation"]') //Confirm Password
await confirmPassword_Section.fill('12345bob')
const signUp_Button = page.locator('[class="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]')
await signUp_Button.click() //click sign up button


// const section_for_message = await page.locator('[class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-2"]')
// const findthankyou_message = await section_for_message.locator('[class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"]')
// console.log(await findthankyou_message.allTextContents())

const message_Section =  await page.locator('[class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"]')
expect(await message_Section).toBeTruthy()
const message = message_Section.textContent()
console.log(await message)
// const footer = await page.locator('[class="font-light text-gray-400 text-center lg:text-left"]')
// const footer_Message = footer.textContent()
// console.log(await footer_Message)
//await page.waitForLoadState()
//const toastMessage = await message_Section.textContent()

//console.log( await toastMessage)
//expect(await message_Section).toContainText(toast_message)




})