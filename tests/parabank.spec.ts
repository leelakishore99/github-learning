
import {test,expect} from '@playwright/test'

test('Para Bank', async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

    await page.locator('//input[@name="username"]').fill('leela');

    await page.locator('//input[@type="password"]').fill('leela');

    await page.locator('//input[@value="Log In"]').click();

    const title = await page.title();
    console.log(title)
    await expect(page).toHaveTitle('ParaBank | Accounts Overview')
})