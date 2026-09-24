import {test, expect} from '@playwright/test'

test('1.Handle Static Dropdown using selectOption',async({page})=>{

    await page.goto("https://demoqa.com/select-menu",{waitUntil:"domcontentloaded"});

    await page.waitForTimeout(3000);

    const dropdown = page.locator("#oldSelectMenu");

    //Selecting by Index
    await dropdown.selectOption({index:0});
    const indexValue = await dropdown.inputValue();
    console.log(indexValue);

    await page.waitForTimeout(3000);

    //Selecting by Text
    await dropdown.selectOption({label:'Blue'});
    const textValue = await dropdown.inputValue();
    console.log(textValue);

    await page.waitForTimeout(3000);

    //Selecting by Value
    await dropdown.selectOption('3');
    const Value = await dropdown.inputValue();
    console.log(Value);

    await page.waitForTimeout(3000);
 
});

test.skip('2.Get All Dropdown Options',async({page})=>{

    await page.goto("https://demoqa.com/select-menu",{waitUntil:"domcontentloaded"});

    await page.waitForTimeout(3000);

    const dropdown = page.locator('//select[@id="oldSelectMenu"]/option');

    const allValues = await dropdown.allTextContents();  
    console.log(allValues);
 
});

test.skip('3.Select Dropdown by Label',async({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/",{waitUntil:"domcontentloaded"});

    const dropdown = page.locator("//select");

    await dropdown.selectOption({label:"India"});

    const selectedValue = await dropdown.inputValue();
    console.log(selectedValue);
});
test.skip('4.Select Dropdown by Index',async({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/",{waitUntil:"domcontentloaded"});

    const dropdown = page.locator("//select");

    await dropdown.selectOption({index:4});

    const selectedValue = await dropdown.inputValue();
    console.log(selectedValue);
});

test.skip('5.Verify Default Selected Option',async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    const dftValue = await page.locator('#oldSelectMenu').inputValue();
    console.log("Default selected option: "+dftValue);
});

test.skip('6.Handle Multi Select Dropdown',async({page})=>{

    await page.goto("https://demoqa.com/select-menu",{waitUntil:"domcontentloaded"});

    await page.locator("(//div/input)[3]").click();

    await page.locator("//div[text()='Blue']").click();
    await page.locator("//div[text()='Green']").click();

    const firstSelected = await page.locator("//div[text()='Blue']").textContent();
    console.log(firstSelected);

    const secondSelected = await page.locator("//div[text()='Green']").textContent();
    console.log(secondSelected);

});

test.skip('7.Search Dropdown Handling',async({page})=>{

    await page.goto("https://www.amazon.com/");

    await page.waitForTimeout(3000);

    const searchBar = page.locator('//input[@id="twotabsearchtextbox"]');
    searchBar.fill("oneplus nord 6");
    await page.waitForTimeout(3000);

    const suggestedList = page.locator("//div[text()='oneplus nord 6']/child::span[text()='ce lite']");
    const selectedValue = await suggestedList.textContent();
    console.log("oneplus nord 6"+selectedValue);

    suggestedList.click();
    await page.waitForTimeout(3000);

});

test.skip('8.Custom Dropdown Handling (without select tag)',async({page})=>{
    await page.goto("https://www.irctc.co.in/nget/train-search",{waitUntil:'domcontentloaded'});
    await page.locator("//button[text()='English']").click();

    const dropDown = page.locator("//span[text()='All Classes']");
    await dropDown.click();

    const allOptions = await page.locator("//li/span").allTextContents();
    console.log("All Options: ",allOptions);

    const option = page.locator("//span[text()='AC 3 Economy (3E)']");
    await option.click();

    const selectedOption = await page.locator("(//p-dropdown/child::div/child::div/child::span)[1]").textContent();
    console.log("Selected Option : "+selectedOption);

    await page.waitForTimeout(3000);
});

test.skip('9.Dynamic Dropdown Handling',async({page})=>{

    await page.goto("https://www.google.com/");

    const inputArea = page.locator("(//textarea)[1]");
    await inputArea.fill("Oneplus 13");

    await page.waitForTimeout(4000);
    
    const option = page.locator("//ul/li/div/div/div/div/span[contains(text(),'Oneplus 13r 256gb Black')]");
    await option.click();

    await page.waitForTimeout(14000);
});

test.skip('10.Dropdown Validation using Assertion',async({page})=>{

    await page.goto("https://demoqa.com/select-menu",{waitUntil:'domcontentloaded'});

    const dropDown = page.locator('//select[@id="oldSelectMenu"]');
    await dropDown.click();

    const valueText = "Aqua";
    await dropDown.selectOption({label:valueText});

    const selectedOption = await page.locator('//select[@id="oldSelectMenu"]').locator('option:checked').textContent();
    console.log(selectedOption);

    expect(selectedOption).toBe(valueText);

});

test('11.Dynamic',async({page})=>{

    await page.goto("https://demoqa.com/select-menu",{waitUntil:'domcontentloaded'});

    await page.locator("//input[@id='react-select-3-input']").click();

    await page.getByText('Dr.', { exact: true }).click();

    expect(page.locator('//div[@class="css-1dimb5e-singleValue"]')).toHaveText("Dr.");
});