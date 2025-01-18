# Transaction Log Processor

### Problem Statement

You are given a **transaction log file** (`transactions.json`) containing details of financial transactions:

```json
[
  { "id": 1, "type": "credit", "amount": 200, "account": "A123" },
  { "id": 2, "type": "debit", "amount": 100, "account": "A123" },
  { "id": 3, "type": "credit", "amount": 500, "account": "B456" },
  { "id": 4, "type": "debit", "amount": 300, "account": "A123" },
  { "id": 5, "type": "credit", "amount": 400, "account": "B456" }
]
```

### Tasks

1. **Parse the File**

   - Read the file using `Deno.readTextFileSync()` and parse the JSON content.

2. **Summarize Account Balances**

   - Calculate the net balance for each account (`credit - debit`).
   - Output the balances in an object like this:
     ```javascript
     {
       A123: 100,
       B456: 900
     }
     ```

3. **Handle Errors Gracefully**

   - If the file is missing or malformed, catch the error and display a user-friendly message like:  
     `"Error: Unable to process transactions. Please check the file and try again."`

4. **Bonus Challenge** [optional]
   - If any transaction has a negative `amount` or an unknown `type`, log an error:  
     `"Transaction ID [id] has invalid data: [error description]"`
   - Skip invalid transactions and proceed with the rest.

## Transaction Log Processor - Expected Output (for the given data)

### 1. Account Balances

- **ACC001**:  
  `1500 (credit) + 800 (credit) - 500 (debit) - 300 (debit) - 50 (debit) - 700 (debit)` = **$750.00**
- **ACC002**:  
  `2000 (credit) + 500 (credit) - 1200 (debit) - 100 (debit)` = **$1200.00**

---

### 2. Category Summaries

#### Credits:

- **ACC001**:  
  `1500 (salary) + 800 (refund)` = **$2300.00**
- **ACC002**:  
  `2000 (bonus) + 500 (freelance)` = **$2500.00**

#### Debits:

- **ACC001**:  
  `500 (groceries) + 300 (utilities/electricity) + 50 (snacks) + 700 (shopping/clothes)` = **$1550.00**
- **ACC002**:  
  `1200 (rent) + 100 (entertainment/movies)` = **$1300.00**

---

### 3. Transaction Breakdown

- **Total Transactions**: 10
- **Credit Transactions**: 5
- **Debit Transactions**: 5

---

### 4. Tag-based Summaries

- **Salary**: $1500.00
- **Groceries**: $500.00
- **Bonus**: $2000.00
- **Rent**: $1200.00
- **Entertainment/Movies**: $100.00
- **Shopping/Clothes**: $700.00
- **Snacks**: $50.00
- **Freelance**: $500.00
