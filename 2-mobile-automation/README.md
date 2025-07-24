### Monefy App - E2E Mobile Automation Test

**Overview**

This project is part of the N26 Senior QA Engineer Home Challenge - Task 2. The objective is to implement automated mobile end-to-end tests for the Monefy Android application using Appium and WebdriverIO.

**Goal**
Automate the following 3 E2E user flows in the Monefy Android app:
1.Add Expense
2.Add Income
3.Check Balance

**Tech Stack & Tools**

WebdriverIO(v8+)
Appium
Mocha Test Framework
JavaScript
@rpii/wdio-html-reporter for  HTML reports
Android Studio Emulator (Pixi 3)
Appium Inspector
Monefy - Budget & Expenses app 1.18.0 APK


**Setup & Execution**

Prerequisites

Node.js installed
Appium installed locally via: npm install --save-dev appium
Android Studio & Emulator set up (Pixi 3 is used here)
Appium Inspector for UI element inspection

**Install Dependencies**

- npm install
- Run All Tests
  npx wdio run wdio.conf.js
- Run Specific Test File
  npx wdio run wdio.conf.js --spec ./test/specs/<filename>.e2e.js
  Example:
  npx wdio run wdio.conf.js --spec ./test/specs/expenseFlow.e2e.js

**Test Reports**

After execution, an HTML report with timestamp will be generated in:

C:\Users\Sandy\appium-wdio-tests\reports\html-reports\suite-0-0\0-0\report_<timestamp>.html - for each e2e flow execution


**Known Issues / Assumptions / FYI**

1. A separate flow (gettingStarted.e2e.js) is included to handle the app startup flow through multiple screens (Getting started → Amazing → I'm ready → Closing prompt). Occasionally, the app skips this flow and lands directly on the closing prompt screen.

2. Four separate E2E test files (gettingStarted.e2e.js, expenseFlow.e2e.js, incomeFlow.e2e.js, and balanceFlow.e2e.js) are created for:
   - Clear specification of functionality
   - Improved test readability, debugging, and maintenance
   - Scalability for future enhancements

3. The noReset: true capability is set to avoid reloading the app for every test run.

4. Emulator is expected to be running before test execution.


** Author**

Sandhyashree