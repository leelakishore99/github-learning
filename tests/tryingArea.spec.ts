import{test} from '@playwright/test';
import { getData } from '../utils/PropertyReeadertry';
import { getExcelData } from '../utils/ExcelReader';
const config = getData();
const excel = getExcelData('TestData.xlsx','Sheet1') as any[];

for(let row of excel){
test(`Verifying in ${row.Id} User`,async({page})=>{
    const config = getData();
    await page.goto(config.baseurl);

    await page.getByPlaceholder('Enter your username').fill(row.Username);
    //await page.waitForTimeout(3000);
    await page.getByPlaceholder('Enter your password').fill(row.Password);
    //await page.waitForTimeout(3000);
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(3000);

    const welcome = page.locator("//p[@id='welcomeUser']");
    const welcomeMessage = await welcome.innerText();
    console.log(welcomeMessage);
});
}