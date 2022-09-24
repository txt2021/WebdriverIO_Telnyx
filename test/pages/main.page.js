const page = require('./page');


const signupButton = 'header>div li [href="/sign-up"]';
const readyArea = 'header > p';
const requestButton = 'main [href="https://telnyx.com/contact-us"]';
const expertsTitle = 'header h1';
const resourcesButton = 'header ul~div~div>ul>li:nth-child(6)>span';
const productsButton = 'header ul~div~div>ul>li:nth-child(1)>span';
const allproductsButton = 'header a[href ="/products"]';
const solutionsButton= 'header ul~div~div>ul>li:nth-child(3)>span'
const allsolutionsButton = 'header a[href ="/solutions"]';
const pricingButton = 'header ul~div~div>ul>li:nth-child(10)>span';
const allpricingButton = 'header a[href ="/pricing"]';
const devdocsButton = 'header [href="https://developers.telnyx.com/docs/v2"]';
const devdocsTitle = 'main h1';
const supportButton = 'header [id="dialogAudio"] ~ a:nth-child(3)';
const searchfield = '[placeholder="Search for articles..."]';
const searchtext = 'testing';
const searchTitle = '[class="c__light"]';
const waitlistButton = 'header span>[href="/products/storage"]';
const joinButton = 'main h1 ~ div:nth-child(4) >div';
const joinTitle = 'main h3>div>span';
const blogButton = 'header [href="/resources"]';
const calcButton = '[href="/twilio-pricing-calculator"]';
const footer = 'header ~ main ~ footer';

class MainPage {

        
    async clicksignupButton() {
        await page.click(signupButton);
    }

    async scrolltoresdyArea() {
        await page.scrollIntoView(readyArea);
    }

    async scrolltoFooterArea() {
        await page.scrollIntoView(footer);
    }

    async clickrequestButton() {
        await page.click(requestButton);
    }

    async clickdevdocsButton() {
        await page.click(devdocsButton);
    }

    async clicksupportButton() {
        await page.click(supportButton);
    }

    async clickWaitlistButton(){
        await page.click(waitlistButton);
    }

    async clickJoinButton(){
        await page.click(joinButton);
    }

    async clickBlogButton(){
        await page.click(blogButton);
    }

    async clickCalcButton(){
        await page.click(calcButton);
    }

    async clickallProductsButton(){
        await page.click(allproductsButton);
    }

    async clickallSolutionsButton(){
        await page.click(allsolutionsButton);
    }

    async clickallPricingButton(){
        await page.click(allpricingButton);
    }

    async expertsTitleIsDisplayed(){
        await (expect(page.isdisplayed(expertsTitle)));
    }

    async devdocsTitleIsDisplayed(){
        await (expect(page.isdisplayed(devdocsTitle)));
    }

    async searchTitleIsDisplayed(){
        await (expect(page.isdisplayed(searchTitle)));
    }

    async joinFormIsDisplayed(){
        await (expect(page.isdisplayed(joinTitle)));
    }

    async experturlChecking(){
        await (expect(page.urlChecking('contact-us')));
    }

    async devdocsurlChecking(){
        await (expect(page.urlChecking('docs')));
    }

    async searchurlChecking(){
        await (expect(page.urlChecking('testing')));
    }

    async joinurlChecking(){
        await (expect(page.urlChecking('storage#form')));
    }

    async hovertoResoucseButton() {
        await page.hover(resourcesButton);
    }

    async hovertoProductsButton() {
        await page.hover(productsButton);
    }

    async hovertoSolutionsButton() {
        await page.hover(solutionsButton);
    }

    async hovertoPricingButton() {
        await page.hover(pricingButton);
    }

    async inputSearch(){
        await page.setvalue(searchfield,searchtext);
    }
}
module.exports = new MainPage()