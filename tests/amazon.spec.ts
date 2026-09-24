import {test,expect} from '@playwright/test'

test('Amazon', async({page})=>{

    await page.goto("https://www.amazon.in/ax/claim?arb=68022015-0203-4a1c-9911-4d3562e346a5&tag=techglare-21");

    await page.locator('#ap_email_login').fill('leelakishore62@gmail.com');

    await page.locator('.a-button-input').click();

    /*
    //Relative x Path
    await page.locator('//input[@type="email"]').fill('leelakishore62@gmail.com');

    await page.locator('//input[@type="submit"]').click();

    await page.locator('//input[@type="password"]').fill('123456789');

    await page.locator('//input[@id="signInSubmit"]').click();

    */
})
//changing the line