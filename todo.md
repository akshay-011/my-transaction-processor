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
  (for now we will return a emty object)

# TODO

- a function takes a array of object and process it and and spit out amount
- add and substract amount
- i can use a object to store data (of course it is a object the contract says it is a object)

- read file get json data as objects (handle error)
