
const page = require('./page');

const email = '[id="email"]';
const testemail = 'testmail@com';
const submitButton = 'button[type="submit"]';
const email_error = '[id="email_error"]';
const promocode = '[aria-label="signup-form"] > div div:nth-child(4)';
const promofield = '[aria-label="signup-form"] > div div:nth-child(4) input';
const termsButton = '[href="/terms-and-conditions-of-service"]';
const termsTitle = 'main h1 ';
const policyButton = '[href="/privacy-policy"]';
const privacyTitle = 'main h1 ';


class SignUpPage {

    async inputEmail(){
        await page.setvalue(email,testemail);
    }

    async clickSubmitButton(){
        await page.click(submitButton);
    }

    async clickPromocodeButton(){
        await page.click(promocode);
    }
    async clickTermsButton(){
        await page.click(termsButton);
    }

    async clickPolicyButton(){
        await page.click(policyButton);
    }

    async messageVisual(){
        await (expect(page.isdisplayed(email_error)));
    }
    async promofieldIsDisplayed(){
        await (expect(page.isdisplayed(promofield)));
    }

    async termstitleIsDisplayed(){
        await (expect(page.isdisplayed(termsTitle)));
    }

    async policytitleIsDisplayed(){
        await (expect(page.isdisplayed(privacyTitle)));
    }

    async urlChecking(){
        await (expect(page.urlChecking('sign-up')));
    }

    async urlTermsChecking(){
        await (expect(page.urlChecking('terms-and-conditions-of-service')));
    }

    async urlPolicyChecking(){
        await (expect(page.urlChecking('privacy-policy')));
    }
    

}

module.exports = new SignUpPage();
