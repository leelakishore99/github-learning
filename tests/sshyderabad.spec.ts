
import {test} from '@playwright/test'

test('SS Hyderabad Biriyani',async({page})=>{

    await page.goto('https://sshyderabadbiryani.com/menu.php');

    await page.getByRole('link',{name:'Menu'}).click();

    await page.waitForTimeout(3000);
    
    await page.locator("//input[@id='pro9']").click();

    await page.waitForTimeout(3000);

    await page.locator("//div[contains(text(), 'item')]").click();

    await page.waitForTimeout(3000);

    await page.locator("//a[contains(text(),'Place')]").click();

    await page.waitForTimeout(3000);

})