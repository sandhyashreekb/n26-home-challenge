# 🔍 Task 3 – REST API Test Automation (Swagger Petstore API)

This project automates tests for the **User domain** of the [Swagger Petstore REST API](https://petstore.swagger.io). It verifies the correctness of key CRUD operations, and includes **negative test cases** to evaluate error handling.


## Tech Stack

- **Node.js + JavaScript** – Lightweight and modern
- **Jest** – Fast and expressive test framework
- **Supertest** – HTTP request testing made simple
- **jest-html-reporter** – Generates test execution reports

## Project Structure

3-api-test-automation/
├── tests/ # Test cases (CRUD + negative)
├── utils/ # API client with base URL
├── test-report.html # Generated HTML test report
├── package.json # Project config & dependencies
├── jesthtmlreporter.config.json # Report output setup
└── README.md # You’re here!


---

## Setup Instructions

1. Open terminal in the project folder:

```bash
cd 3-api-test-automation
npm install

2. Run tests in terminal:

npm test

3. Run tests and generate an HTML report:
npm run test:report

4. Open the report
start test-report.html  # On Windows

## Test Scenarios

Positive:

1.Create a user
2.Update the user
3.Get the created user
4.Delete the user

Negative :
1. Get a non-existent user → expect 404
2. Create user with invalid (empty) data → expect 200 (known Swagger issue)
3. Delete non-existent user → expect 404

## Summary

Tests grouped into positive and negative flows
Dynamic username generation avoids conflicts between runs
HTML reports provide clear visibility for reviewers

---

## Author

Sandhyashree Basavaraju
N26 Home Challenge – Task 3

