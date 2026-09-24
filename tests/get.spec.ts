import {test,expect} from '@playwright/test';
test.describe('GET Request testing',()=>{

test.skip('GET Request single object',async({request})=>{

    const response = await request.get('http://localhost:3000/employeedetails/140');
    const employeedetails = await response.json();
    console.log(employeedetails);

    expect(response.status()).toBe(200);
    console.log(response.status());

    expect(employeedetails.id).toBe("140");
    console.log(employeedetails.id);

    expect(employeedetails.Name).toBe("Leela Kishore AG");
    console.log(employeedetails.Name);

    console.log(await response.ok());
    expect(response.ok()).toBeTruthy();

});

test.skip('GET Request multiple objects',async({request})=>{

    const response=await request.get('http://localhost:3000/employeedetails');
    const emp = await response.json();

    expect(response.status()).toBe(200);
    expect(emp.length).toBeGreaterThan(0);

    for(const details of emp){

        console.log(`checking the data profile for: ${details.Name}`);

        expect(details.id).toBeDefined();
        expect(details.Name).not.toBeNull();
    }
});

test.skip('GET Using the QUERY parameter ',async({request})=>{

    const response = await request.get('http://localhost:3000/employeedetails',{
        params:{
            Role:"SDET"
        }
    });

    const filteredList = await response.json();
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    console.log(`List size: ${filteredList.length}`);

    for(const emplist of filteredList){
        expect(emplist.id).toBeTruthy();
        expect(emplist.Role).toBe("SDET");
        console.log(`Employee Name: ${emplist.Name} Role: ${emplist.Role} `)
    }
});

test('POST request single object',async({request})=>{
    const datacreation = [
        {id:"116",Name:"Don Lee",Role:"SDET"},
        { id:"117",Name:"Lee",Role:"SDET"}
    ];
    for(const datascreated of datacreation){
    const response = await request.post('http://localhost:3000/employeedetails',{
        data:datascreated}
    );
     expect(response.status()).toBe(201);
     const empdata = await response.json();
}

    
    

});

test.skip('POST request multiple objects',async({request})=>{
    const bulkPayload = {
        employeedetails:[
        {
        id:"104",
        Name:"Bala Vaishnavi",
        Role:"SDET"
    },
    {
        id:"105",
        Name:"Bala",
        Role:"SDET"
    }]
};


    const response = await request.post('http://localhost:3000/employeedetails',{
        data:bulkPayload
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const newEmployee = await response.json();
    console.log('Created Record:',newEmployee);

    const ids:String[] = ["104","105"];
    for(const emplist of newEmployee.employeedetails){
        expect(ids).toContain(emplist.id);
    }

});

});