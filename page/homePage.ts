import { Locator,Page,expect } from "@playwright/test";

export class MainPage{

    private welcomeMsg:Locator;
    
    constructor(page:Page){
        this.welcomeMsg = page.locator("//p[@id='welcomeUser']");
    }

    // async verifyMessage(){
    //     await expect(this.welcomeMsg).toHaveText('Welcome to SenthilSmartQAHub');
    // }

    async messageText(){
        console.log(await this.welcomeMsg.textContent());
    }
}