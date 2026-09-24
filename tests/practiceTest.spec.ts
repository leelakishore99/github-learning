
import {test,expect} from '@playwright/test'

test.skip('Practicetestautomation',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await page.locator('#username').fill('student')
    const title = await page.title()
    console.log(title)
    await page.locator('#password').fill('Password123')
     
    await page.getByRole('button',{name:'submit'}).click()

    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation')

    console.log(await page.title())

    const subtitle = await page.getByText('Congratulations student. You successfully logged in!')
    await expect(subtitle).toBeVisible()

    await page.getByRole('link', {name:'Log out'}).click()
})

test.skip('Try',async()=>{

    // console.log('Url parsing');
    // console.log('----------------------------------');  
    // const text='url=http\nenv=qa\nbrowser=chromium';
    // console.log(text);
    // console.log('----------------------------------'); 

    // const lines = text.split('\n');
    // console.log(lines);

    // const arr:any = {};
    // for(const line of lines){
    //     const pairs = line.split('=');
    //     const key = pairs[0];
    //     const value = pairs[1];
    //     arr[key]= value;
    // }
    // console.log(arr.env);

    const name = 'leela kishore';
    const split = name.split(' ');
    const [firstname,lastname]=[split[0],split[1]];
    console.log(firstname,lastname);
 
    let count:number =0;
    for(const letters of name){
        if(letters==' '){
            continue;
        }
    }
    console.log(count);
})