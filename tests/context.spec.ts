import {test,chromium} from '@playwright/test'

test.skip('context',async()=>{

    test.setTimeout(60000);

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/");

    const loginPop = page.getByRole('button',{name:"✕"});

    await loginPop.waitFor({state:'visible',timeout:4000});
    if(await loginPop.isVisible()){
        await loginPop.click();
    }else{
        console.log("loginPop is not visible");
    }
   
    const search = page.getByRole('textbox',{name:"Search for Products, Brands and More"})
    await search.fill("nothing 4a pro");
    await page.waitForTimeout(3000);

    await search.press('Enter');
    await page.waitForTimeout(3000);

    const Product = page.getByText("Nothing Phone (4a) Pro (Silver, 256 GB)");
    await Product.nth(0).click();
    await page.waitForTimeout(3000);


    const browser1 = await chromium.launch();
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    await page1.goto("https://www.flipkart.com/");

    const loginPop1 = page1.getByRole('button',{name:"✕"});

    await loginPop1.waitFor({state:'visible',timeout:4000});
    if(await loginPop1.isVisible()){
        await loginPop1.click();
    }else{
        console.log("loginPop is not visible");
    }
   
    const search1 = page1.getByRole('textbox',{name:"Search for Products, Brands and More"})
    await search1.fill("moto edge 70 pro");
    await page1.waitForTimeout(3000);

    await search1.press('Enter');
    await page1.waitForTimeout(3000);

    const Product1 = page1.getByText("MOTOROLA edge 70 pro",{exact:false});
    await Product1.nth(0).click();
    await page1.waitForTimeout(3000);
});
test('context1',async({page})=>{

    test.setTimeout(60000);
 

    await page.goto("https://www.flipkart.com/");

    const loginPop = page.getByRole('button',{name:"✕"});

    await loginPop.waitFor({state:'visible',timeout:4000});
    if(await loginPop.isVisible()){
        await loginPop.click();
    }else{
        console.log("loginPop is not visible");
    }
   
    const search = page.getByRole('textbox',{name:"Search for Products, Brands and More"})
    await search.fill("nothing 4a pro");
    await page.waitForTimeout(3000);

    await search.press('Enter');
    await page.waitForTimeout(3000);

    const Product = page.getByText("Nothing Phone (4a) Pro (Silver, 256 GB)");
    await Product.nth(0).click();
    await page.waitForTimeout(3000);

    

});