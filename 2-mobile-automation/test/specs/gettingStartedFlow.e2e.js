const { expect } = require('@wdio/globals');

describe('Monefy App', () => {
    it('should handle initial app screen based on state', async () => {
        try {
          const getStarted = await $('android=new UiSelector().text("GET STARTED")');
          if (await getStarted.isDisplayed()) {
            await getStarted.click();
            const amazing = await $('android=new UiSelector().text("AMAZING")');
            await amazing.click();
            const ready = await $('android=new UiSelector().text("I\'M READY")');
            await ready.click();
          }
        } catch (err) {
          console.log('Intro screen not shown, moving on...');
        }
      
        try {
          const promoCloseBtn = await $('id=com.monefy.app.lite:id/buttonClose');
          if (await promoCloseBtn.isDisplayed()) {
            await promoCloseBtn.click();
          }
        } catch (err) {
          console.log('Promo not shown, continuing...');
        }
      
        // Now you're guaranteed to land on the home screen
        const isHomeVisible = await $('id=com.monefy.app.lite:id/expense_button').isDisplayed();
        expect(isHomeVisible).toBe(true);
      });
      
});