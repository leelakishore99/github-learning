import{test,expect} from '@playwright/test'
import {loginPage} from '../page/pomOrangeHRMLogin';
import data from '../testData/OrangeHRMdata.json'

test.describe('OrangeHRM Login Tests',()=>{

for(const testdatas of data){
test(`OrangeHRM Login Test Scenario ${testdatas.id}`,async({page})=>{
    const Login = new loginPage(page);

    await Login.openSite();
    await Login.credentialsLogin(testdatas.username,testdatas.password,'Login');

    await expect(page).toHaveTitle(testdatas.expectedTitle);
}); 
}  
})