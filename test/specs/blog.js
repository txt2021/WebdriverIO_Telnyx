
const blog_page = require('../pages/blog.page'); 
const page = require('../pages/page'); 
const lending_page = require('../pages/main.page'); 


beforeEach(async () => {
  await browser.url('/') 
  await page.acceptCookie();
});

describe('Tests for blog search and filters', () => {
        
    it('TC06 - Should check Blog search work', async() => {   
      await lending_page.hovertoResoucseButton();
      await lending_page.clickBlogButton();  
      await blog_page.inputBlogSearch();  
      await browser.keys("\uE007");  
      await blog_page.searchResultsIsDisplayed();
      await blog_page.searchResultsurlChecking();
    })  
    
    it('TC07 - Should check Blog filter by product work', async() => {   
        await lending_page.hovertoResoucseButton();
        await lending_page.clickBlogButton();  
        await blog_page.clickFaxButton();  
        await blog_page.faxResultsIsDisplayed();
        await blog_page.faxResultsurlChecking();
    })
    
    it('TC08 - Should check Blog filter by content work', async() => {   
        await lending_page.hovertoResoucseButton();
        await lending_page.clickBlogButton();  
        await blog_page.clickNewsButton();  
        await blog_page.newsResultsIsDisplayed();
        await blog_page.newsResultsurlChecking();
    }) 

    
})