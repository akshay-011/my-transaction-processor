# Objective

- calculate account cash info
- account -> is account holder name
- credit means got money (+cash)
- debit means spend money (-cash)
- read json file
- gracefully die, even file doesn't exist

# questions

- what happends if the initial value is zero and a debit occures
  (assuming it is a credit account minus balance is possible)
- what if json file is present and there is no transactions
  (for now we will return a emty object) ?
- can there be types other than credit or debit ?

# TODO

- a function takes a array of object and process it and and spit out amount (proccesTransactions)
- add and substract amount
- i can use a object to store data (of course it is a object the contract says it is a object)

- read file get json data as objects (handle error)

## proccesTransactions

- takes whole array and redue it to summary
- we need a function to which will be the reducer (makeSummary)

  ### makeSummary

  - takes a transaction and a existing summary
  - it will create the account holder if he doesn't exist
  - according type we will add and substract the data
    (reconcileTransaction)

  #### reconcileTransaction

  - it will take account informations and transaction details like, type, name and amount
  - it will add amount if type is "credit"
  - and substract amount if type is "debit"
  - this will not create a new account only updates account
