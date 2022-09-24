
const sign_up_page = require('../pages/signup.page') 
const lending_page = require('../pages/main.page'); 
const page = require('../pages/page'); 

beforeEach(async () => {
  await browser.url('/')  
  await page.acceptCookie();
});

describe('Tests in Sign Up Page', () => {
        
    it('TC01 - Should enter incorrect email in "work email" field in "Sign up" form', async() => {   
      await lending_page.clicksignupButton();
      await sign_up_page.inputEmail();
      await sign_up_page.clickSubmitButton();
      await sign_up_page.messageVisual();
      await sign_up_page.urlChecking();      
    }) 

    it('TC18 - Should display the Promo code field', async() => {   
      await lending_page.clicksignupButton();
      await sign_up_page.clickPromocodeButton();
      await sign_up_page.promofieldIsDisplayed();
      await sign_up_page.urlChecking();      
    }) 

    it('TC19 - Should display the terms and conditions page', async() => {   
      await lending_page.clicksignupButton();
      await sign_up_page.clickTermsButton();
      await sign_up_page.termstitleIsDisplayed();
      await sign_up_page.urlTermsChecking();      
    }) 

    it('TC20 - Should display the privacy policy page', async() => {   
      await lending_page.clicksignupButton();
      await sign_up_page.clickPolicyButton();
      await sign_up_page.policytitleIsDisplayed();
      await sign_up_page.urlPolicyChecking();      
    }) 
})