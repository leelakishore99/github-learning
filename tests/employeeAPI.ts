import{APIRequestContext} from '@playwright/test'
const BASE_URL = 'http://localhost:3000/employeedetails';

export class APIclient{
    private request:APIRequestContext;

    constructor(request:APIRequestContext){
        this.request=request
    };

    async get(url:string){
        return await this.request.get(url);
    }

    async post(url:string,body:any){
        return await this.request.post(url,
            {data:body}
        );
    }

    async put(url:string,body:any){
        return await this.request.put(url,{data:body}
        );
    }
    async delete(url:string){
        return await this.request.delete(url);
    }

}