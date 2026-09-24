
import {test} from '@playwright/test'

test('Pizza Hut',async({page})=>{

    await page.goto("https://www.pizzahut.co.in/");

    await page.locator("//a[text()='Sign in']").click();

    await page.locator("//input[@id='phone-field']").fill('9444739713');

    await page.waitForTimeout(4000);
    await page.locator("//span[text()='Send One Time Password (OTP)']").click({force:true});

})