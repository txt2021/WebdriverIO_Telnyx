const cookie_Button = '[aria-label="close and deny"]~div>div';
class Page {
  

    async click(locator){
        await $(locator).click();
    }

    async setvalue(locator,text){
        await ((await $(locator)).setValue(text));
    }

    async isdisplayed(locator){
        await ((await $(locator)).toBeDisplayed());
    }

    async urlChecking(text){
        await (await (browser).toHaveUrlContaining(text));
    }

    async scrollIntoView(locator){
        await ((await $(locator)).scrollIntoView());
    }
    
    async hover(locator){
        await ((await $(locator)).moveTo());
    }

  
    async isdisplayedinViewPost(locator){
        await ((await $(locator)).isDisplayedInViewport());
    }

    async acceptCookie(){
        if (await ($(cookie_Button).isDisplayedInViewport()) == true){
            await $(cookie_Button).click();
          }
    }
}
module.exports = new Page()