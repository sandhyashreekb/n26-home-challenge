const monefyPage = require('../pageobjects/monefy.page');

describe('Monefy App', () => {
    it('should add a new expense', async () => {
      // Step 1: Tap the EXPENSE button
      await monefyPage.expenseButton.click();
  
      // Step 2: Pause so the screen fully loads (for debugging)
      await browser.pause(3000); // 10 seconds to let the new screen load

      // Step 3: Enter wrong digit
    await monefyPage.button2.click(); // '2'

     // Step 2: Clear it using backspace
    await monefyPage.clearButton.click();
  
      // Step 4: Interact with amount field
      // Tap the digits to form "50"
    await $('id=com.monefy.app.lite:id/buttonKeyboard5').click();
    await $('id=com.monefy.app.lite:id/buttonKeyboard0').click();

     // Step5: Select 'Cash' or 'Payment card' via icon
     await $('id=com.monefy.app.lite:id/icon').click();
     await $('android=new UiSelector().text("Payment card")').click(); // Or 'Ca

     // Step 6: Validate currency is USD
     const currency = await $('id=com.monefy.app.lite:id/currency_name').getText();
     expect(currency).toBe('USD');

     // Step 7: Enter note
    await $('id=com.monefy.app.lite:id/textViewNote').click();
    await $('id=com.monefy.app.lite:id/textViewNote').setValue('Lunch with client');
    
    await driver.pressKeyCode(66);

    await monefyPage.amountField.click();

    //step 8 Tap on Calender field and choose a date
    await $('id=com.monefy.app.lite:id/textViewDate').click();
    await browser.pause(1000); 

    await $('android=new UiSelector().text("16")').click(); 
    await $('id=com.monefy.app.lite:id/confirm_button').click();

      // Step 8: Select category
      await monefyPage.chooseCategoryButton.click(); 
      await monefyPage.getCategory('Food').click(); // Or 'Transport', etc.

      //Assert pie chart is visible
      await expect(monefyPage.pieChart).toBeDisplayed();
      
  

    });
    
});