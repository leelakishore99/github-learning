import{Locator,Page} from '@playwright/test'

export class HomePage{
    public page:Page;
    private usernameText:Locator;
    private passwordText:Locator;
    private loginButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameText=page.getByPlaceholder('Enter your username');
        this.passwordText=page.getByPlaceholder('Enter your password');
        this.loginButton = page.getByRole('button',{name:'Login'});
    }

    async urlLogin(url:string){
        await this.page.goto(url);
    }
    

    async doLogin(username:string,password:string){
        await this.usernameText.fill(username);//SenthilSmartQAHub
        await this.passwordText.fill(password);//demo
        await this.loginButton.click();
    }
}