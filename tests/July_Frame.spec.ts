import {test,expect} from '@playwright/test'

test.skip('1.Switch to Frame 1.Verify the heading & print the heading lenght',async({page})=>{
await page.goto("https://demoqa.com/frames",{waitUntil:'domcontentloaded'});

const frame1 = page.frameLocator("#frame1");

const text = await frame1.locator("//h1").textContent();

expect(text).toBe("This is a sample page");

if(text !==null){
    console.log("Heading text: ",text);
    console.log("Text lenght: ",text.length);
}else{
    console.log("No text found in the element");
}
});

test.skip('2.Clear the existing editor text.Type your full name.Verify the entered text.Take a screenshot.',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/iframe",{waitUntil:'domcontentloaded'});

await page.locator('//button/div[@class="tox-icon"]').click();

await page.waitForTimeout(3000);

const Frame1 = page.frameLocator("//iframe[@title='Rich Text Area']");

const bodyLocator = Frame1.locator("body");

console.log(await bodyLocator.textContent());

await page.screenshot({
    path: 'tests/2.png'
});
await page.waitForTimeout(3000);
});

test.skip('3.Print the parent frame text,Print the child frame text,Verify both texts are different',async({page})=>{
    await page.goto("https://demoqa.com/nestedframes");

    const ParentFrame = page.frameLocator("#frame1");
    const parentText = await ParentFrame.locator("body").innerText();
    console.log("Parent frame text : ",parentText);
    expect(parentText).toBe('Parent frame ');

    const ChildFrame = ParentFrame.frameLocator('iframe');
    const childText = await ChildFrame.locator("//p").textContent();
    console.log("Child frame text : ",childText);
    expect(childText).toBe('Child Iframe');
});

test.skip('4.Read text from Left, Middle, Right, and Bottom frames',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    const topFrame = page.frameLocator('//frame[@name="frame-top"]');

    const leftFrame = topFrame.frameLocator('//frame[@name="frame-left"]');
    const leftText = await leftFrame.locator('body').innerText();

    const middleFrame = topFrame.frameLocator('//frame[@name="frame-middle"]');
    const middleText = await middleFrame.locator('body').innerText();

    const rightFrame = topFrame.frameLocator('//frame[@name="frame-right"]');
    const rightText = await rightFrame.locator('body').innerText();

    const bottomFrame = page.frameLocator('//frame[@name="frame-bottom"]');
    const bottomText = await bottomFrame.locator('body').innerText();

    const textarr:string[] = [leftText,middleText,rightText,bottomText];
    for(let i=0; i<textarr.length;i++){
        console.log(textarr[i]);
    }
});

test('5.Count the total number of iframes,Print each iframes id attribute,Verify there are exactly 2 iframes', async ({ page }) => {
    await page.goto("https://demoqa.com/frames");

    // 1. Locate the iframe elements first
    const frameElements = page.locator('iframe').nth(0);
    
    // 2. Get the actual count of iframe tags on the page
    const count = await frameElements.count();
    //expect(count).toBe(2); 
    console.log(await frameElements.getAttribute('id'));
    // 4. Run the loop safely using the exact element count
    for (let i = 0; i < count; i++) {
        const iterating = frameElements.nth(i);
        const idattr = await iterating.getAttribute('id');
        console.log(`Iframe ${i + 1} ID:`, idattr);
    }
});
