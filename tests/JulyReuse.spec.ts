import {test,expect} from '@playwright/test'
import { ReuseMethod } from './JulyReuseMethod';

test.skip('Fcebook',async({page})=>{
    const facebook = new ReuseMethod(page);

    await facebook.openBrowser('https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F');

    console.log(await facebook.pageTitle());

    console.log(facebook.pageUrl());

    console.log(await facebook.pageContent());

    await facebook.image('loginpage.png');

    //Getting Username
    await facebook.getbypageLabel('Email address or mobile number').fill('leelakishore01@gmail.com');
    const usrNmae = await facebook.getbypageLabel('Email address or mobile number').inputValue();
    console.log('Entered UserName : ',usrNmae);

    //Getting Password //Log in
    await facebook.pageLocator("//input[@name='pass']").fill('123456');
    const usrPswd = await facebook.pageLocator("//input[@name='pass']").inputValue();
    console.log('Entered Userpassword : ',usrPswd);

    //await facebook.pageLocator("//span[text()='Log in']").click();

    await facebook.customTimeout(2000);
    const isTextvisible = await facebook.textVisible('Explore');
    console.log(isTextvisible);

});

test.skip('DropDown',async({page})=>{

    const demoqa = new ReuseMethod(page);

    await demoqa.openBrowser('https://demoqa.com/select-menu');

    await demoqa.dropdownSelectLabel('#oldSelectMenu','Yellow');

    console.log(await demoqa.dropdownSelectedText('#oldSelectMenu'));
});

test.skip('Alert',async({page})=>{
    const alert = new ReuseMethod(page);

    await alert.openBrowser('https://the-internet.herokuapp.com/javascript_alerts');
    await alert.customTimeout(4000);
    
    await alert.alertAccept();

    await alert.pageLocatorClick("//button[text()='Click for JS Alert']");

    const textContent = await alert.locatorTextcontent('//p[@id="result"]');
    console.log(textContent);
    const innerText = await alert.locatorInnerText('//p[@id="result"]');
    console.log(innerText);
    const Input = await alert.locatorInnerText('//p[@id="result"]');
    console.log(Input);

});
