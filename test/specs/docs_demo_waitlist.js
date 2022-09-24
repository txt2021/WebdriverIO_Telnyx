
const lending_page = require('../pages/main.page'); 
const page = require('../pages/page'); 

beforeEach(async () => {
  await browser.url('/')
  await page.acceptCookie();
});

describe('Tests for waitlist, documentation, waitlist, support center', () => {
        
    it('TC02 - Should request a demo on Telnyx', async() => {   
      await lending_page.scrolltoresdyArea();
      await lending_page.clickrequestButton();  
      await lending_page.expertsTitleIsDisplayed();   
      await lending_page.experturlChecking();
    }) 

    it('TC03 - Should access to Telnyx API Documentation', async() => {   
      await lending_page.hovertoResoucseButton();
      await lending_page.clickdevdocsButton();  
      await lending_page.devdocsTitleIsDisplayed();   
      await lending_page.devdocsurlChecking();
    }) 

    it('TC04 - Should check the support center search work', async() => {   
      await lending_page.clicksupportButton();
      await lending_page.inputSearch();
      await browser.keys("\uE007");     
      await lending_page.searchTitleIsDisplayed();   
      await lending_page.searchurlChecking();
    }) 

    it('TC05 - Should join the waitlist on Telnyx', async() => {   
      await lending_page.clickWaitlistButton();
      await lending_page.clickJoinButton(); 
      await lending_page.joinFormIsDisplayed();   
      await lending_page.joinurlChecking();
    }) 

    
})