
const media_page = require('../pages/media.page'); 
const lending_page = require('../pages/main.page'); 
const page = require('../pages/page'); 

beforeEach(async () => {
  await browser.url('/') 
  await page.acceptCookie();
});

describe('Tests for social media and law enforcement request', () => {
        
    it('TC14 - Should check connection to Telnyx facebook account', async() => {   
      await lending_page.scrolltoFooterArea();
      await media_page.clickFacebookButton();  
      await media_page.facebookurlChecking();
    })  

    it('TC15 - Should check connection to Telnyx twitter account', async() => {   
      await lending_page.scrolltoFooterArea();
      await media_page.clickTwitterButton();  
      await media_page.twitterurlChecking();
    })

    it('TC16 - Should check connection to Telnyx linkedin account', async() => {   
      await lending_page.scrolltoFooterArea();
      await media_page.clickLinkedInButton();  
      await media_page.linkedinurlChecking();
    })

    it('TC17 - Should send empty Law Enforcement Request', async() => {   
      await lending_page.scrolltoFooterArea();
      await media_page.clickLawButton(); 
      await media_page.lawFormIsDisplayed();
      await media_page.lawurlChecking();
    })
      
})