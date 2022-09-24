const page = require('./page');

const apiButton ='main [alt="voice api"]';
const continueButton = 'header~div>div>button';
const calcTitle= 'header~div>div>h2';
const plusButton = '#local-numbers+button';
const minusButton = '[for="local-numbers"]+div>button:nth-child(1)';

class CalculatorPage {

    async clickApiButton() {
        await page.click(apiButton);
    }

    async clickContinueButton() {
        await page.click(continueButton);
    }

    async clickPlusButton() {
        await page.click(plusButton);
    }

    async clickMinusButton() {
        await page.click(minusButton);
    }

    async calcTitleIsDisplayed(){
        await (expect(page.isdisplayed(calcTitle)));
    }

    async calcurlChecking(){
        await (expect(page.urlChecking('pricing-calculator')));
    }
}

module.exports = new CalculatorPage();
