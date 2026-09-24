import {test,expect} from '@playwright/test'

test('1.swiggy',  async({page})=>{
    await page.goto("https://sshyderabadbiryani.com/");

    //ancestor
    await page.locator("//center/child::ul/child::li/child::a[text()='Bucket Biryani']").click();

    //child
    await page.locator("//div[@id='menus']/child::div/child::div/child::button[normalize-space()='Chicken Biryani (Super Pack)']").click();

    await page.locator("//div/child::span/child::button[contains(@onclick,'add(3')]").click();
    
    await page.locator("//div[text()='ADD your order' and @class='title2']").nth(0).click();
});