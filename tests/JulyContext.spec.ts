import{chromium} from 'playwright'
import {test,expect} from '@playwright/test'

test.skip('Task 1: Print parent/child page title',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const heroku = await context.newPage();
     
    await heroku.goto('https://the-internet.herokuapp.com/windows');

    const Parent = await heroku.title();
    const results = await Promise.all([
        context.waitForEvent("page"),
        heroku.locator("//a[text()='Click Here']").click()
    ]);
    const newPage = results[0];

    await newPage.waitForLoadState('domcontentloaded');
    const Child = await newPage.title();

    console.log("Parent Page title :",Parent);
    console.log("Child Page title :",Child);

    await newPage.waitForTimeout(4000);
});
test.skip('Task 2: ',async({browser})=>{
    const context = await browser.newContext();
    const site = await context.newPage();

    await site.goto('https://the-internet.herokuapp.com/windows');

    const [childPage] = await Promise.all([
        context.waitForEvent("page"),
        site.locator("//a[text()='Click Here']").click()
    ]);
    await childPage.waitForLoadState('domcontentloaded');

    const childUrl = childPage.url();
    console.log("childPage URL : ",childUrl);
});
test.skip('Task 3 & 4: ',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');

    const popup = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[text()='Click Here']").click()
    ]);
    const newPage = popup[0];
    await newPage.waitForLoadState('domcontentloaded');
    //Bringing the child in front
    await newPage.bringToFront();
    //closing the child page
    await newPage.close();


    const count = page.context().pages().length;
    console.log("Count of the pages: ",count);

    //checking wether the parent is closed or not
    const status = page.isClosed();
    console.log("The parent page status is closed: ",status);


});
test.skip('Task 5: ',async({browser})=>{
    const context = await browser.newContext();
    const site = await context.newPage();

    await site.goto('https://the-internet.herokuapp.com/windows');

    const ParentURL = site.url();
    console.log("Parent URL : ", ParentURL);

    const ParentTitle = await site.title();
    console.log("Parent Title :",ParentTitle);

    const [childPage] = await Promise.all([
        context.waitForEvent("page"),
        site.locator("//a[text()='Click Here']").click()
    ]);
    await childPage.waitForLoadState('domcontentloaded');

    const childUrl = childPage.url();
    console.log("childPage URL : ",childUrl);

    const childTitle = await childPage.title();
    console.log("childTitle : ",childTitle);
});
test.skip('Task 6: ',async({browser})=>{
    const context = await browser.newContext();
    const site = await context.newPage();

    await site.goto('https://the-internet.herokuapp.com/windows');
    const ParentUrl = await site.title();
    console.log(ParentUrl); 

    const [childPage] = await Promise.all([
        site.waitForEvent('popup'),
        site.locator("//a[text()='Click Here']").click()
    ]);
    await childPage.waitForLoadState('domcontentloaded');
    console.log("Child Page: ",await childPage.title());
    console.log("Parent Page: ",await site.title());

    childPage.bringToFront();

    console.log("Getting the Child page second time: ",await childPage.title());
});

test('Clicking the 3rd product from the Amazon site',async({page})=>{
    await page.goto('https://www.amazon.in/?tag=amazonitt04-21&gad_source=1');

    await page.screenshot();
    //Search box giving the input
    const input =  page.getByRole('searchbox',{name:'Search Amazon.in'});
    await input.fill('IQO Neo 10');
    await page.screenshot();
    //Getting the 1st result from the dropdown
    await page.locator('//div[@class="left-pane-results-container"]/div').nth(0).click();
    await page.screenshot();
    
    //Getting the 3rd product from the Product list 
    //By using the Xpath 
    const third_product = page.locator('((//div[@data-component-type="s-search-result"])[3]//h2/span)[2]');
    const [Product] = await Promise.all([
        //Opens the new Tab
        page.waitForEvent('popup'),
        //Clicking the product
        third_product.click()
    ]);
    await Product.waitForLoadState('domcontentloaded');

    //Clicking the Buy now button
    await Product.locator('//input[@id="buy-now-button"]').click();
    await page.waitForTimeout(1000);

    const SigninInput = Product.locator('#ap_email_login');
    await SigninInput.fill('944439713');
});

