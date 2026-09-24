//@ts-ignore
import * as fs from'fs';

export function getData(){
    const file = fs.readFileSync('configtry.properties','utf-8');
    const lines = file.split('\n');

    const data: any={};

    for(let line of lines){
        const parts = line.split('=');
        const key = parts[0];
        const value = parts[1];

        if(key && value){
            data[key.trim()] = value.trim();
        }
    }
    return data;
}
