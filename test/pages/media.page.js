
const page = require('./page');

const facebookButton = 'a[href="https://www.facebook.com/Telnyx/"]';
const twitterButton = 'a[href="https://twitter.com/telnyx"]';
const linkedinButton = 'a[href="https://www.linkedin.com/company/telnyx/"]';
const lawButton = 'a[href="https://telnyx.com/law-enforcement-request"]';
const formTitle = '[id="header"] h2';

class MediaPage {
   
    async clickFacebookButton() {
        await page.click(facebookButton);
    }

    async clickTwitterButton() {
        await page.click(twitterButton);
    }

    async clickLinkedInButton() {
        await page.click(linkedinButton);
    }

    async clickLawButton() {
        await page.click(lawButton);
    }

    async clickSubmitButton() {
        await page.click(submitButton);
    }

    async lawFormIsDisplayed(){
        await (expect(page.isdisplayed(formTitle)));
    }

    async facebookurlChecking(){
        await (expect(page.urlChecking('facebook.com/Telnyx')));
    }

    async twitterurlChecking(){
        await (expect(page.urlChecking('twitter.com/telnyx')));
    }

    async linkedinurlChecking(){
        await (expect(page.urlChecking('linkedin.com/company/telnyx/')));
    }

    async lawurlChecking(){
        await (expect(page.urlChecking('law-enforcement-request')));
    }

}

module.exports = new MediaPage();
