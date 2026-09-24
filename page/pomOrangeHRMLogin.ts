import { Page } from "@playwright/test";
import { basePage } from "../tests/basePage";
import { getConfig } from "../utils/propertyReader";
export class loginPage extends basePage{
    constructor(page:Page){
        super(page);
    }

    //Passing the site url
    async openSite(){
        const config = getConfig();
        await this.openUrl(config.baseUrl);
    }

    //Login User: name and password
    async credentialsLogin(Username:string,Password:string,buttonName:string){

        await this.locateByPlaceHolder('Username').fill(Username);
        await this.locateByPlaceHolder('Password').fill(Password);

        await this.locateByRole('button',buttonName).click();

    }




}