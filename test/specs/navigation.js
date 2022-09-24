
const navigation_page = require('../pages/navigation.page'); 
const lending_page = require('../pages/main.page'); 
const page = require('../pages/page'); 

beforeEach(async () => {
  await browser.url('/')    
  await page.acceptCookie();
});

describe('Tests for header navigation', () => {
        
    it('TC11 - Should check navigation to all Telnyx products work', async() => {   
      await lending_page.hovertoProductsButton();
      await lending_page.clickallProductsButton();  
      await navigation_page.productsTitleIsDisplayed();
      await navigation_page.productsurlChecking();
    })  

    it('TC12 - Should check navigation to all Telnyx solutions work', async() => {   
        await lending_page.hovertoSolutionsButton();
        await lending_page.clickallSolutionsButton();  
        await navigation_page.solutionTitleIsDisplayed();
        await navigation_page.solutionsurlChecking();
    }) 
    
    it('TC13 - Should check navigation to all Telnyx pricing work', async() => {   
        await lending_page.hovertoPricingButton();
        await lending_page.clickallPricingButton();  
        await navigation_page.pricingTitleIsDisplayed();
        await navigation_page.pricingsurlChecking();
    }) 

      
})