const Page = require('./page');

class MoneyPage {
  get expenseButton() {
    return $('id=com.monefy.app.lite:id/expense_button');
  }

  get amountField() {
    return $('id=com.monefy.app.lite:id/amount_text');
  }

  get button0() {
    return $('id=com.monefy.app.lite:id/buttonKeyboard0');
  }

  get button1() {
    return $('id=com.monefy.app.lite:id/buttonKeyboard1');
  }

  get button2() {
    return $('id=com.monefy.app.lite:id/buttonKeyboard2');
  }

  get button5() {
    return $('id=com.monefy.app.lite:id/buttonKeyboard5');
  }

  get clearButton() {
    return $('id=com.monefy.app.lite:id/buttonKeyboardClear');
  }

  get chooseCategoryButton() {
    return $('id=com.monefy.app.lite:id/keyboard_action_button');
  }

  getCategory(name) {
    return $(`android=new UiSelector().text(\"${name}\")`);
  }

  get incomeButton() {
    return $('id=com.monefy.app.lite:id/income_button');
  }

  get confirmButton() {
    return $('id=com.monefy.app.lite:id/keyboard_action_button');
  }

  get currencyLabel() {
    return $('id=com.monefy.app.lite:id/currency_name');
  }

  get paymentIcon() {
    return $('id=com.monefy.app.lite:id/icon');
  }

  get noteField() {
    return $('id=com.monefy.app.lite:id/textViewNote');
  }

  get calendarField() {
    return $('id=com.monefy.app.lite:id/textViewDate');
  }

  get incomeAmountText() {
    return $('id=com.monefy.app.lite:id/income_amount_text');
  }

  get expenseAmountText() {
    return $('id=com.monefy.app.lite:id/expense_amount_text');
  }

  get pieChart() {
    return $('id=com.monefy.app.lite:id/piegraph');
  }

  get balanceContainer() {
    return $('id=com.monefy.app.lite:id/balance_container');
  }

  get balanceAmount() {
    return $('id=com.monefy.app.lite:id/balance_amount');
  }

  get leftHamburgerButton() {
    return $('id=com.monefy.app.lite:id/leftLinesImageView');
  }

  get rightHamburgerButton() {
    return $('id=com.monefy.app.lite:id/rightLinesImageView');
  }

  get transactionList() {
    return $('id=com.monefy.app.lite:id/expandableListViewTransactions');
  }

  get firstTransactionHeader() {
    return $('android=new UiSelector().resourceId("com.monefy.app.lite:id/transaction_group_header").instance(0)');
  }

  get firstTransactionAmount() {
    return $('android=new UiSelector().text("$1,000.00").instance(0)');
  }

  get sortButton() {
    return $('id=com.monefy.app.lite:id/buttonChooseListSortingMode');
  }
}

module.exports = new MoneyPage();
