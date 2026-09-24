
import {test} from '@playwright/test'

test('Starbucks',async({page})=>{

    await page.goto("https://www.starbucks.in/dashboard");

    await page.locator('//a[@id="dropdownUser1"]').click();

    await page.locator('//button[text()="Login or Sign Up"]').click();

    await page.locator("//input[@placeholder='Enter Mobile Number to Continue']").fill('9444739713');

    await page.locator("//button[text()='Continue']").click();
})