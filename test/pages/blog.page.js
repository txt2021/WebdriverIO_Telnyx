
const page = require('./page');

const blogSearch = '[id="search"]';
const searchtext = 'testing';
const searchTitle = '[id="articles"] > div';
const faxButton = '[id="filter-by-product"]~ul>li:nth-child(4)';
const faxTitle = '#articles > div > a:nth-child(1) > article > div > h2';
const newsandeventsButton = 'div[aria-labelledby="filter-by-content"]>ul>li:nth-child(3)>button';
const newsTitle = '#articles > div > a:nth-child(1) > article > div > header > span > span';

class BlogPage {

    async inputBlogSearch(){
        await page.setvalue(blogSearch,searchtext);
    }

    async clickFaxButton() {
        await page.click(faxButton);
    }

    async clickNewsButton() {
        await page.click(newsandeventsButton);
    }

    async searchResultsIsDisplayed(){
        await (expect(page.isdisplayed(searchTitle)));
    }

    async faxResultsIsDisplayed(){
        await (expect(page.isdisplayed(faxTitle)));
    }

    async newsResultsIsDisplayed(){
        await (expect(page.isdisplayed(newsTitle)));
    }
    
    async searchResultsurlChecking(){
        await (expect(page.urlChecking('testing')));
    }

    async faxResultsurlChecking(){
        await (expect(page.urlChecking('fax')));
    }

    async newsResultsurlChecking(){
        await (expect(page.urlChecking('News')));
    }    

}

module.exports = new BlogPage();
