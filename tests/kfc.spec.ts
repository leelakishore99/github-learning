
import {test,expect} from '@playwright/test';

test('KFC', async({page})=>{

    await page.goto('https://online.kfc.co.in/'),{timeout:6000};

    await page.locator("//span[text()='Sign In']").click();

    await page.locator("//input[@id='phoneNumberId']").fill('9444739713');

    await page.locator("//button[@id='btnSendCode']").click();

    await expect(page).toHaveTitle('KFC OTP VERIFICATION')

    await console.log("The Title of the Page is: "+ await page.title());
    await expect(page.getByText('We Just Texted You')).toBeVisible({timeout:5000});

    /*
    await page.goto('https://online.kfc.co.in/');

    await page.locator('.sign-in-text.not-cart-icon').click();

    await page.locator('#phoneNumberId').fill('6374118248');

    await page.locator('.btnSendCode').click();

    await page.waitForTimeout(5000);

    */
})