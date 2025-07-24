## Exploratory Testing - Monefy App - Andriod, Verison: 1.22.2

## Charter 1: Add Expense flow

**Goal** 

To explore the "Add Expense" functionality across all categories, validate if expenses are recorded correctly, 
check visual representations (like the pie chart), and verify filtering and edit/delete options.

**Priority**

High – Adding expenses is the core functionality of the app and directly affects user satisfaction and data accuracy.

### Findings:

a) Postive findings

1. Expenses were added successfully across all listed categories.
2. Pie chart provides a clear visual breakdown of spending percentages by category.
3. Filtering expenses by day, week, month, and year worked well and displayed accurate data.

b) Negative findings/Bugs
 
1. On the 'Add expense' page,The **currency icon (EUR/USD/Any)** next to the expense input field may mislead users 
   into thinking it allows currency switching — but it doesn’t.
2. On the 'Add expense' page, default **account options** are limited to “Cash” and “Payment Card.” 
   customising or adding additional option in could improve user experience:
   - SEPA Direct Debit
   - PayPal
   - Bank Transfer
3. There should have been a separate category called "miscellaneous", to add the expenses which doesn't belong any of the listed category.
4. The week/day/year label above the pie chart isn’t clickable. I expected a calendar or date selector to appear.
5. The date range text (like “20–26 July”) isn’t visually aligned with the chart, it feels disconnected and could be placed more intuitively.
6. The expense input field accepts up to 10 digits, but there’s no feedback or error when that limit is reached,
   it just stops accepting input.
7. After adding an expense, there’s no clear way to edit it. There’s no icon or CTA indicating this is possible.
8. **Icon mismatch:** The catogory “Entertainment” icon looks more related to "eating-out" icon, 
   instead it could have looked more undestandable if it was a "Movies/games" icon.
9. The note field allows max 32 characters, but there’s no warning or validation message when the limit is hit — text just stops.

### Risks:

- New users may find it confusing that they can’t easily edit expenses.
- No confirmation before deleting could lead to accidental data loss (if the feature exists but hidden).
- Limited Account methods may frustrate users who rely on digital wallets or direct bank methods.
- **No confirmation** on delete action — risk of accidental data loss.
- **Missing modern payment options** could alienate users who rely on digital wallets or bank transfers.
- **Lack of feedback** when character limits or field constraints are hit can confuse or frustrate users.

### Summary:

Overall, the Add Expense flow works — expenses are recorded, charts are updated, and filters are accurate. 
But the user experience feels underdeveloped in some key areas. Small things like misleading icons, missing validations, 
and limited control over entries make the app feel more basic than it needs to be.


## Charter 2: Add Balance Flow

**Goal:**  
To explore how the Balance section behaves — including how transactions are shown, 
how they’re categorized, and whether the design and labels feel intuitive to everyday users.

**Priority:**  
High – This screen gives users a quick snapshot of where their money is going and coming from. If it’s not clear or reliable, the whole app feels untrustworthy.

###  Findings

a) Positive Findings 

1. The balance is accurately calculated as *Income – Expenses*.
2. Clicking the **Balance** button opens a list of transactions, with:
   - Income items highlighted in **green**
   - Expense items highlighted in **red**
3. Transactions can be **sorted by category**, helping users track their budget.
4. It’s possible to swipe week by week to view past records — this gesture works well and feels smooth.
5. Income and expense entries can still be **added directly** from the Balance screen, making the flow convenient.

b) Negative Findings/Bugs

1. The **"Balance"** element behaves like a button but functions primarily as a navigation link to the transaction history. 
   Since buttons typically trigger actions, this may **confuse users**, especially those expecting an actual balance-related action.
2. The **hamburger icons** on either side of the balance perform the same action as the balance button itself, 
   introducing **redundancy** and potential UI clutter.
3. The **transaction count** next to each date is displayed in **green**, even when it includes  income, bank transfer and expenses. 
Since green is visually tied to income/bank transfers, this might **mislead users** into thinking the count represents only income transactions.

### Risks
- **Terminology and UI mismatches** can create confusion and reduce trust in navigation.
- **Redundant controls** (multiple ways to access the same screen) may complicate the interface without adding value.
- **Color coding inconsistencies** could lead to incorrect assumptions about the data.

### Summary
The **Balance** section offers a helpful summary and view of transaction history, with accurate calculations and useful category sorting. 
However, its **labeling and interaction behavior** diverge from common UX expectations. 
Specifically, styling “Balance” as a button implies an action rather than a navigation role. 
Combined with redundant navigation icons and unclear visual signals, the feature risks creating friction for new or casual users.
 Clearer labeling and consistent UI behavior would significantly improve the experience.


### charter 3: Adding accounts flow

**Goal** 
Account setup is crucial for organizing transactions, especially for users managing multiple financial sources. While not as frequently used as expense entry, this feature shapes the foundation for meaningful categorization.

**Priority**
Account setup is crucial for organizing transactions, especially for users managing multiple financial sources. 
While not as frequently used as expense entry, this feature shapes the foundation for meaningful categorization.

### Findings

a) Positive findings

1. Users can add new accounts using a selection of 25 icons, each meant to represent different account types (e.g., wallet, bank, savings).
2. Once a new account is added, it immediately appears in the filter section (on the left side of the main page), confirming that the change is reflected in real-time.

b) Negative findings/Bugs

1. Tranfer section looks empty even adding many transfers under Account section, however other accounts like cash or payment 
   shows some numbers.
2.  No Validation When creating duplicate accounts- The app allows creating accounts with the same icon/category multiple times, 
    without any warning or visual differentiation.
3. Navigation to the "Add Account" section is **not intuitive** — it is hidden under the right-side “Epsilon” menu, which is not clearly labeled or explained.
4. The 25 account icons shown during account creation **lack text labels or tooltips**, making it difficult to understand what each icon represents. This could lead to incorrect selections.
5. Account creation is **only available via the Accounts section**, but it would improve usability if account selection or creation were integrated into other flows, such as:
   - The **filter dropdown** (when selecting an account during expense entry)
   - The **expense/income entry flow** (e.g., a “+ Add new account” option when choosing Cash/Payment Card)
6. The account name input feels unintuitive — it’s styled like a button rather than a proper text field, making data entry awkward.



### Risks
- Poor discoverability may prevent users from setting up proper account tracking, especially early in their app experience.
- Lack of clarity in icon-based account selection may lead to incorrect data classification and user frustration.
- Potential transfer display bugs may lead users to believe transactions were not saved, impacting trust in the system.

### Summary
The Monefy app supports basic account management, but the experience lacks clarity and accessibility. 
The flow to add accounts is buried in a non-obvious menu, and the lack of labels for icons makes selection confusing. 
There’s also a bug in how transfer data is shown, which can hurt user trust. 
Making account creation easier to access — especially during expense/income entry — and improving visual cues would significantly enhance 
the user experience.


### Charter 4: Add income flow

**Goal**
Evaluate the process of adding income entries, including category selection, ease of input, and how clearly the income reflects 
in the transaction history and balance overview.

**Priority**
Medium-High - While users may add income less frequently than expenses, 
the accuracy and clarity of this flow are essential for understanding financial health and ensuring balanced reporting.

### Findings

a) Positive findings

1. Users are able to add income entries under available categories such as **Salary** and **Savings**.
2. Added income entries are reflected correctly in the **transaction history**, accessible via the Balance screen.
3. When entering income amounts, the **calculator-style number pad** supports arithmetic operations, which improves convenience and accuracy.

b) Negative findings/Bugs

1. When switching between expense and income modes quickly, the **category selector occasionally shows the wrong icons**, requiring a second tap to refresh.
2. The calculator pad occasionally allows invalid input like multiple decimal points (e.g., `500..00`), though the entry still gets saved.
3. The **main "+" button** on the homepage appears equal in visual weight to the "-" (expense) button, although most users log expenses more frequently than income. 
   This visual parity may confuse or mislead users.
4. There is **no tooltip or label** indicating that "+" and green represent income, and "-" and red represent expenses. 
   This may be unclear to users with visual impairments or those unfamiliar with color-coded interfaces.
5. The income categories are limited to **Salary** and **Savings** (free version). 
   Other relevant categories (e.g., Investment, Bonus, Freelance) are only available in the **premium version**, which limits flexibility.
6. There is **no option to change currency** while adding income — especially important for users with multiple income sources 
   in different currencies.
7. When deleting an income entry, **no confirmation prompt** appears. This could lead to accidental deletion without a way to undo.



### Risks

- **Lack of clarity in color and icon usage** could confuse users and lead to incorrect entry types (e.g., adding income as expense).
- **Accidental deletion** of income entries with no confirmation may result in lost financial records.
- **Limited categories and missing currency switch** may frustrate users with diverse or international income sources.
- **UI bugs and input errors** could lead to incorrect financial data, impacting trust in the app.

### Summary
While the income-adding flow functions correctly and includes helpful features like calculator input and transaction reflection, 
it lacks **UX clarity** and **depth**. The absence of tooltips, confirmation prompts, and category flexibility weakens its reliability 
for serious personal finance tracking. Minor bugs related to input and icon refresh also affect usability. 
Enhancing accessibility, preventing accidental actions, and supporting international income scenarios would elevate the experience.

