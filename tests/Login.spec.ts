import {test} from "@playwright/test";
import { HomePage } from "../page/Login";


test('Login',async({page})=>{
    await page.goto('/2025/06/banking-application.html');

    const LoginPage = new HomePage(page);
    await LoginPage.urlLogin('')
    await LoginPage.doLogin('SenthilSmartQAHub','demo');
   //
});