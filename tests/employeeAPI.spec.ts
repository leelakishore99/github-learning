import{ expect, test } from '@playwright/test';
import { APIclient } from './employeeAPI';

test('API Response Testing',async({request})=>{
    const apiclient = new APIclient(request);

    const response = await apiclient.get('http://localhost:3000/employeedetails');
    expect(response.status()).toBe(200);

    // const emp = await apiclient.post('http://localhost:3000/employeedetails',{
    //     id:132,Name:"Leela Kishore",Role:"SDET"
    // });
    // expect(emp.status()).toBe(201);
    // const empResponse = await emp.json();
    // console.log(empResponse);
    
    const empModify = await apiclient.put('http://localhost:3000/employeedetails/132',{
        Name:"Don Lee",
        Role:"SDET"
    });
    expect(empModify.status()).toBe(200);


})