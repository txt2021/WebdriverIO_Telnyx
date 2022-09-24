
const page = require('./page');

const productsTitle = 'main h1';
const solutionsTitle = 'main h1';
const pricingTitle = 'main h1>span';

class NavigationPage {
   
    async productsTitleIsDisplayed(){
        await (expect(page.isdisplayed(productsTitle)));
    }

    async solutionTitleIsDisplayed(){
        await (expect(page.isdisplayed(solutionsTitle)));
    }

    async pricingTitleIsDisplayed(){
        await (expect(page.isdisplayed(pricingTitle)));
    }
    
    async productsurlChecking(){
        await (expect(page.urlChecking('products')));
    }

    async solutionsurlChecking(){
        await (expect(page.urlChecking('solutions')));
    }

    async pricingsurlChecking(){
        await (expect(page.urlChecking('pricing')));
    }

}

module.exports = new NavigationPage();
