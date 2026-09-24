import {expect, test} from '@playwright/test'
import testdata from '../testData/LoginCredentials.json'

test.describe('Login Test Scenarios Manual Data Input',()=>{

test(`Login Test Scenario - ${testdata[0].scenario}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(testdata[0].username);
    await page.locator('#password').fill(testdata[0].password);

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(testdata[0].expectedUrl);
})

test(`Login Test Scenario - ${testdata[1].scenario}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(testdata[1].username);
    await page.locator('#password').fill(testdata[1].password);

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(testdata[1].expectedUrl);
})

})

test.describe('Login Test Scenarios Automated Data Input',()=>{
for(const datas of testdata){
    test(`Login Test Scenario - ${datas.scenario}`,async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill(datas.username);
    await page.locator('#password').fill(datas.password);

    await page.locator('#login-button').click();

    
    if(datas.scenario=='Invalid Login'){

        const errorMessage = page.locator('//h3');
        console.log(errorMessage);

        await expect(errorMessage).toBeVisible();
        //Epic sadface: Username and password do not match any user in this service (Valid Text)
        await expect(errorMessage).toHaveText('password');
    }
    else{
        await expect(page).toHaveURL(datas.expectedUrl);
    }
})  }
}) 
