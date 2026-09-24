import {test} from "@playwright/test";
import { HomePage } from "../page/Login";
import { MainPage} from "../page/homePage";

test('HomePage',async({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2025/06/banking-application.html');

    const loginPage = new HomePage(page);
    await loginPage.doLogin('SenthilSmartQAHub','demo');
    

    const dashboardPage = new MainPage(page);
    //await dashboardPage.verifyMessage();

    await dashboardPage.messageText();

});