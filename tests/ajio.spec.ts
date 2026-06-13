
import {test,expect} from '@playwright/test'

test('Ajio',async({page})=>{

    await page.goto('https://www.ajio.com/');

    await page.locator('#loginAjio').click();

    await page.locator('.username').fill('9444739713')

    await page.locator('[value="Continue"]').click();
     /*
    //Relative x path
    await page.locator('//div[@id="closeBtn-locale-banner-popup"]').click();

    await page.locator('//span[@id="loginAjio"]').click();

    await page.locator('//input[@id="mobileNumber"]').fill('9444739713');

    await page.locator('//input[@class="login-btn"]').click();
    */
    
})