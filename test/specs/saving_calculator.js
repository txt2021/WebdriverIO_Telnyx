
const calculator_page = require('../pages/calculator.page'); 
const lending_page = require('../pages/main.page'); 
const page = require('../pages/page'); 

beforeEach(async () => {
  await browser.url('/')
  await page.acceptCookie();
});

describe('Tests for saving calculator', () => {
        
    it('TC09 - Should check Savings Calculator work with default settings', async() => {   
      await lending_page.hovertoResoucseButton();
      await lending_page.clickCalcButton();  
      await calculator_page.clickApiButton();  
      await calculator_page.clickContinueButton();
      await calculator_page.clickContinueButton();
      await calculator_page.calcTitleIsDisplayed();
      await calculator_page.calcurlChecking();
    })  

    it('TC010 - Should check Savings Calculator work with custom settings', async() => {   
        await lending_page.hovertoResoucseButton();
        await lending_page.clickCalcButton();  
        await calculator_page.clickApiButton();  
        await calculator_page.clickContinueButton();
        await calculator_page.clickPlusButton();
        await calculator_page.clickMinusButton();
        await calculator_page.clickContinueButton();
        await calculator_page.calcTitleIsDisplayed();
        await calculator_page.calcurlChecking();
    })  
      
})