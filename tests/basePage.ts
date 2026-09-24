import{Page} from '@playwright/test'

export class basePage{

    constructor(public page:Page){}

    //Opens the URL
    async openUrl(url:string){
        await this.page.goto(url,{waitUntil:'domcontentloaded'});
    }
    //Locate by Locator
    locateByXpath(locator:string){
        return this.page.locator(locator);
    }
    //Locate by Text
    locateByText(locator:string){
        return this.page.getByText(locator);
    }
    //Locate by Placeholder
    locateByPlaceHolder(locator:string){
        return this.page.getByPlaceholder(locator);
    }
    //Locate by Role
    locateByRole(roleName:any,elementName:string){
        return this.page.getByRole(roleName,{name:elementName});
    }
    //Getting the page Title
    getTitle(){
        return this.page.title();
    }

}