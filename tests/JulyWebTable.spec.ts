import {test,expect} from '@playwright/test'

test.skip('Practice', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});

    const table = page.locator('//table[@name="BookTable"]/tbody');
    await expect(table).toBeVisible();

    const rows = table.locator('//tr');
    console.log("Row count: ",await rows.count());

    const columns = rows.nth(1).locator("//td");
    console.log("Column count: ",await columns.count());

    const datas:string[]= await columns.allInnerTexts();
    console.log(datas);

let values:string[] =[];
    for(let i=1;i<7;i++){
        for(let j=0;j<4;j++){
            const cell = page.locator('//table[@name="BookTable"]/tbody/tr').nth(i).locator('td').nth(j);
            const text = await cell.innerText();
            values.push(text);
        }
    }
    for(let Tabledata of values){
        console.log(Tabledata+" /t");
    
    }
});

test.skip('Practice 2',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});

    const headers = page.locator('#table1 thead');
    console.log(await headers.textContent());
    console.log('headers count:',await headers.count());

    const rows = page.locator('#table1 tbody tr');
    const rowCount = await rows.count();
    console.log("Row count: ",rowCount);

    const names: (string|null)[] = [];

    for(let i=0;i<rowCount;i++){
        const name = await rows.nth(i).locator('td').nth(0).textContent();
            names.push(name);
        for(let j=0;j<6;j++){
            const cells = rows.nth(i).locator('td').nth(j);
            console.log(await cells.textContent());
             
        } 
    }
    for(let arrNames of names){

        if(arrNames=='Smith'){
            arrNames='Leela';
        }
        console.log(arrNames);
    }

});
test.skip('Task 1: Print last 2 rows all datas',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});

    const headers = page.locator('#table1 thead');
    console.log(await headers.textContent());
    console.log('headers count:',await headers.count()); //1

    const rows = page.locator('#table1 tbody tr');
    const rowCount = await rows.count();
    console.log("Row count: ",rowCount);//4

    //Approach 1: Through loop
    for(let i=2;i<rowCount;i++){
        for(let j=0;j<6;j++){
            const cells = rows.nth(i).locator('td').nth(j);
            console.log(await cells.textContent());
        } 
    }

    //Approach 2: Manual approach
    const lastFirstRow = await rows.nth(2).locator('td').allTextContents();
    console.log('last First Row',lastFirstRow);
    const lastSecondRow = await rows.nth(2).locator('td').allTextContents();
    console.log('last Second Row',lastSecondRow);
});
test.skip('Task 2: Print last alternative rows datas',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});

    const rows = page.locator('#table1 tbody tr');
    const rowCount = await rows.count();
    console.log("Row count: ",rowCount);//4


    const columnCount = await rows.nth(1).locator('td').count();
    console.log("Column count: ",columnCount);

    for(let i=0;i<rowCount;i+=2){
        for(let j=0;j<columnCount;j++){
            const cellValues = await rows.nth(i).locator('td').nth(j).textContent();
            console.log(cellValues);
        }
    }

});
test.skip('Task 3: Print last column all rows datas',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});

    const rows = page.locator('#table1 tbody tr');
    const rowCount = await rows.count();
    console.log("Row count: ",rowCount);//4

    for(let i=0;i<rowCount;i++){
        const allLastcolumn =  await rows.locator('td').nth(5).textContent();
        console.log(allLastcolumn);
    }

});
test('Task 4: Print the count of Tables',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables',{waitUntil:'domcontentloaded'});

    const headers = page.locator('//table');
    const tableCount = await headers.count();
    
    console.log("Table count: ",tableCount);
});