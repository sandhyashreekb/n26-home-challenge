const monefyPage = require('../pageobjects/monefy.page');


describe('Monefy App', () => {
    it('should add a new income', async () => {
        await browser.waitUntil(async () => {
          const toast = await $('//*[@text[contains(., "added")]]');
          return !(await toast.isDisplayed());
        }, {
          timeout: 50000,
          timeoutMsg: 'Toast did not disappear in 30s'
        });
  
  
  
        await monefyPage.incomeButton.click();
        await browser.pause(5000); // Wait for the amount field to appear
      
        await monefyPage.button1.click(); // '1'
        await monefyPage.button0.click(); // '0'
        await monefyPage.button0.click(); // '0'
        await monefyPage.button0.click(); // '0'
      
        await monefyPage.confirmButton.click(); // confirm input
      
        await monefyPage.getCategory('Salary').click(); // use 'Other' if 'Salary' doesn't exist
      });
});
    