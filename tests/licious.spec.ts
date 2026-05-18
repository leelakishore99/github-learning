
import {test,expect} from'@playwright/test'

test('Licious',async({page})=>{

    await page.goto('https://www.licious.in/');

    await page.locator("//span[text()='Login']").click();

    await page.locator('//input[@id="login_mobile_number"]').fill('9444739713');

    await page.getByRole('button', {name:'Proceed Via OTP'}).click();
})