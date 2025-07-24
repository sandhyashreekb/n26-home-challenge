# N26 Home Challenge – Senior QA Engineer

This repository contains my solution for the N26 Senior QA Engineer home challenge. It is divided into three key parts:

##  Folder Structure
n26-home-challenge/
n26-home-challenge/
├── 1-exploratory-testing/ # Manual exploratory testing report for Monefy app
├── 2-mobile-automation/ # Mobile test automation using WebdriverIO + Appium
└── 3-api-test-automation/ # REST API automation tests for Petstore API

## Task 1: Exploratory Testing – Monefy App

- Manual exploratory testing of Monefy Android app v1.22.2
- Key flows tested: Add Expense, Add Income, Transaction List, UI behavior
- Documented observations, bugs, and usability suggestions

📄 [`1-exploratory-testing/exploratory-testing.md`](./1-exploratory-testing/exploratory-testing.md)

## Task 2: Mobile Test Automation – Monefy App- v1.18.0 -APK 

Tech Stack: WebdriverIO, Appium, Mocha, @rpii/wdio-html-reporter, Android Studio Emulator (Pixi 3), Appium Inspector
Tested core E2E flows:
- Add Expense
- Add Income
- View Balance and Transactions

Includes:
- Config files
- Page objects

HTML test report

📂 2-mobile-automation

## Task 3: REST API Automation – Petstore API

Tech Stack: JavaScript, Jest, Axios
Automated endpoints tested:
- POST /user
- PATCH /user/{username}
- GET /user/{username}
- DELETE /user/{username}

Validations for response codes, payload structure, and error cases

📂 3-api-test-automation

## How to Run

See individual folder README.md files for instructions on:
Setting up dependencies
Running tests
Viewing reports


🙌 Thank You

This challenge was a great opportunity to showcase my manual and automation testing skills. Please feel free to reach out to me in case of any questions.
