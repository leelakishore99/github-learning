import {test,expect} from '@playwright/test'

test.skip('1. Handle a simple alert and click OK', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        await dialog.accept(); //*Handling alert by clicking OK(.accept())
    });

    await page.getByRole('button',{name:'Click for JS Alert'}).click();
});

test.skip('2. Capture and print the simple alert message', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        console.log(dialog.message()); //*Capturing and priting the alert box message
        await dialog.accept(); //Handling alert by clicking OK(.accept())
    });

    await page.getByRole('button',{name:'Click for JS Alert'}).click();

    const result = page.locator("//p[@id='result']");
    const resultText = await result.innerText();
    console.log(resultText);

    expect(resultText).toBe("You successfully clicked an alert");
});

test.skip('3. Verify the simple alert text', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        console.log(dialog.message()); //Capturing and priting the alert box message
        await dialog.accept(); //Handling alert by clicking OK(.accept())
    });

    await page.getByRole('button',{name:'Click for JS Alert'}).click();

    const result = page.locator("//p[@id='result']");
    const resultText = await result.innerText();
    console.log(resultText);

    expect(resultText).toBe("You successfully clicked an alert"); //* Verifying the simple alert text
});

test.skip('4. Handle a confirmation alert and click OK', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        dialog.accept(); //*Handling confirmational alertby clicking OK
    });

    await page.getByRole('button',{name:'Click for JS Confirm'}).click();

});

test.skip('5. Verify the result message after clicking OK', async({page})=>{

    test.setTimeout(60000);

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept(); //Handling confirmational alertby clicking OK
    });
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();

    const verifyMessage = await page.locator("#result").textContent();

    expect(verifyMessage).toBe("You clicked: Ok"); //Verifying the result message after clicking OK
});

test.skip('6. Handle a confirmation alert and click Cancel', async({page})=>{

    test.setTimeout(60000);
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.dismiss(); //*Handling confirmational alertby clicking Cancel(.dismiss())
    });
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();
});

test.skip('7. Verify the result message after clicking Cancel', async({page})=>{
    test.setTimeout(60000);
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.dismiss(); //Handling confirmational alertby clicking Cancel(.dismiss())
    });
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();

    const verifyMessage = await page.locator("#result").textContent();
    console.log(verifyMessage);
    expect(verifyMessage).toBe("You clicked: Cancel"); //*Verifying the result message after clicking Cancel
});

test.skip('8. Handle a prompt alert and enter a value', async({page})=>{
    test.setTimeout(60000);

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts",{waitUntil:'domcontentloaded'});

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept("Leela Kishore"); //*Handling prompt alert and entering a value
    });

    await page.getByRole("button",{name:"Click for JS Prompt"}).click();

    const verifyMessage = await page.locator("#result").textContent();
    console.log(verifyMessage);
    expect(verifyMessage).toBe("You entered: Leela Kishore");
});

test.skip('9. Verify the result message after entering the value', async({page})=>{
    test.setTimeout(60000);

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts",{waitUntil:'domcontentloaded'});

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept("Leela Kishore"); //Handling prompt alert and entering a value
    });

    await page.getByRole("button",{name:"Click for JS Prompt"}).click();

    const verifyMessage = await page.locator("#result").textContent();
    console.log(verifyMessage);
    expect(verifyMessage).toBe("You entered: Leela Kishore"); //*Verify the result message after entering the value
});

test('10. Handle a delayed alert (alert appearing after a few seconds) and verify the alert text.',async({page})=>{
    test.setTimeout(70000);
    await page.goto("https://demoqa.com/alerts",{waitUntil:'domcontentloaded'});

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByRole('button',{name:'Click me'}).nth(1).click();

    await page.waitForTimeout(6000);
});