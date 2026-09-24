import {Page} from '@playwright/test'

export class ReuseMethod{
    constructor(public page:Page){}
    //1
    async openBrowser(url:string){
        await this.page.goto(url);
    }
    //2
    async pageTitle(){
        const title = await this.page.title();
        return title;
    }
    //3
    pageUrl(){
        const url = this.page.url();
        return url;
    }
    //4
    async pageContent(){
        const content = this.page.content();
        return content;
    }
    //5
    async waitForDomcontentLoaded(){
        await this.page.waitForLoadState('domcontentloaded');
    }
    //6
    async waitForNetworkLoadstate(){
        await this.page.waitForLoadState('load');
    }
    //7
    async waitForNetworkIdle(){
        await this.page.waitForLoadState('networkidle');
    }
    //8
    async isElementVisible(locator:string){
        await this.page.locator(locator).isVisible();
    }
    //9
    async image(filename:string){
        await this.page.screenshot({
        path:'tests/'+filename, 
        fullPage:true
    });}
    //10
    pageLocator(locator:string){
        return this.page.locator(locator);

    }
    //11
    getbypageText(text:string){
        return this.page.getByText(text);
    }
    //12
    getbypageLabel(text:string){
        return this.page.getByLabel(text);
    }
    //13
    getbypagePlaceholder(text:string){
        this.page.getByPlaceholder(text);
    }
    //14
    getbypageTitle(text:string){
        this.page.getByTitle(text);
    }
    //15
    getbypageTestID(text:string){
        this.page.getByTestId(text);
    }
    //16
    async inputFillLocator(locatorText:string,inputText:string){
        await this.page.locator(locatorText).fill(inputText);
    }
    //17
    async customTimeout(time:number){
        await this.page.waitForTimeout(time);
    }
    //18
    async textVisible(text:string){
        return await this.page.getByText(text,{exact:false}).isVisible();
    }
    //19
    async clearInput(locator:string){
        return await this.page.locator(locator).clear();
    }
    //20
    async dropdownSelectIndex(locator:string,indexNumber:number){
        const dropdown = this.page.locator(locator);
        return await dropdown.selectOption({index:indexNumber});
    }
    //21
    async dropdownSelectValue(locator:string,valueText:string){
        const dropdown = this.page.locator(locator);
        return await dropdown.selectOption(valueText);
    }
    //22
    async dropdownSelectLabel(locator:string,LabelText:string){
        const dropdown = this.page.locator(locator);
        return await dropdown.selectOption({label:LabelText});
    }
    //23
    async dropdownSelectedValue(locator:string){
        const dropdown = this.page.locator(locator);
        return await dropdown.inputValue();
    }
    //24
    async dropdownSelectedText(locator:string){
        return await this.page.locator(locator+" option:checked").textContent();
    }
    //25
    async dropdownSelectedInnerText(locator:string){
        return await this.page.locator(locator+" option:checked").innerText();
    }
    //26
    async dropdownAllValues(locator:string){
        return await this.page.locator(locator).allTextContents();
    }
    //27
    async pageClick(loactor:string){
        return await this.page.locator(loactor).click();
    }
    //28
    async closeBrowser(){
        await this.page.close();
    }
    //29
    async getFrameText(frameLocator: string, elementLocator: string): Promise<string | null> {
        return await this.page.frameLocator(frameLocator).locator(elementLocator).textContent();
    }
    //30
    async inputFillFrame(frameLocator: string, elementLocator: string, inputText: string) {
        await this.page.frameLocator(frameLocator).locator(elementLocator).fill(inputText);
    }
    //31
    async clickFrameElement(frameLocator: string, elementLocator: string) {
        await this.page.frameLocator(frameLocator).locator(elementLocator).click();
    }
    //32
    async clearFrameElement(frameLocator: string, elementLocator: string) {
        await this.page.frameLocator(frameLocator).locator(elementLocator).clear();
    }
    //33
    async doubleClickFrameElement(frameLocator: string, elementLocator: string) {
        await this.page.frameLocator(frameLocator).locator(elementLocator).dblclick();
    }
    //34
    async doubleClick(loactor:string){
        return await this.page.locator(loactor).dblclick();
    }
    //35
    async alertAccept(){
        this.page.on('dialog',async dialog=>{
            await dialog.accept();
        });
    }
    //36
    async alertDismiss(){
        this.page.on('dialog',async dialog=>{
            await dialog.dismiss();
        });
    }
    //37
    async alertMessageTxt(){
        let message ='';
        this.page.on('dialog',async dialog=>{
            message = dialog.message();
            await dialog.accept();
        });
        return message;
    }
    //38
    async alertAcceptWithText(textTosend:string){
        this.page.on('dialog',async dialog=>{
            await dialog.accept(textTosend);
        })
    }
    //39
    async pageLocatorClick(locator:string){
        await this.page.locator(locator).click();
    }
    //40 
    async locatorInnerText(locator:string){
        const message = await this.page.locator(locator).innerText();
        return message;
    }
    //41
    async locatorTextcontent(locator:string){
        const message = await this.page.locator(locator).textContent();
        return message;
    }
    //42
    async locatorInputValue(locator:string){
        const message = await this.page.locator(locator).inputValue();
        return message;
    }

    
}