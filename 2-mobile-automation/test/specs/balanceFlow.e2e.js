const monefyPage = require('../pageobjects/monefy.page');

describe('Monefy App - Balance Flow', () => {
  it('should validate balance(income-expense), view transactions, and sort', async () => {

    // Get values from pie chart
  const incomeText = await monefyPage.incomeAmountText.getText(); // e.g., "$1,000.00"
  const expenseText = await monefyPage.expenseAmountText.getText(); // e.g., "$50.00"
  const balanceText = await monefyPage.balanceAmount.getText(); // e.g., "Balance $950.00"

  // Convert to numbers
  const income = parseFloat(incomeText.replace(/[^0-9.]/g, ''));
  const expense = parseFloat(expenseText.replace(/[^0-9.]/g, ''));
  const balance = parseFloat(balanceText.replace(/[^0-9.]/g, ''));

   // Assert
   expect(balance).toEqual(income - expense);

    await monefyPage.balanceContainer.click();

 // Adjust as needed

    await expect(monefyPage.transactionList).toBeDisplayed();

    await monefyPage.firstTransactionHeader.click();

    const txnAmount = await monefyPage.firstTransactionAmount.getText();
    expect(txnAmount).toEqual('$1,000.00');

    await monefyPage.sortButton.click();
  });
});