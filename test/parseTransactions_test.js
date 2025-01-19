import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { parseTransactions } from "../src/parseTransactions.js";

const files = {
  "data1.json": `{"transactions": [{ "type": "credit", "amount": 100, "account": "akshay" }]}`,

  "data2.json": `{"transactions": [
    { "type": "credit", "amount": 100, "account": "inkeet" },
    { "type": "debit", "amount": 100, "account": "aadi" }
  ]
}`,
  "data3.json": `{
  "transactions": [
    { "type": "credit", "amount": 100, "account": "aadi" },
    { "type": "debit", "amount": 100, "account": "akshay" }
  ]
}`,
  "data4.json": `{
  "transaction": [
    { "type": "credit", "amount": 100, "account": "akshay" },
    { "type": "credit", "amount": 100, "account": "inkeet" },
    { "type": "debit", "amount": 100, "account": "aadi" },
    { "type": "credit", "amount": 100, "account": "aadi" },
    { "type": "debit", "amount": 100, "account": "akshay" }
  ]
}`,

  "invalidData.josn": `{
  "transactions": [{ type: "credit", "amount": 100, "account": "akshay" }]
}`,
};

const fakeReadTextFile = (fileName) => {
  if (!(fileName in files)) {
    throw "file not found";
  }

  return files[fileName];
};

Deno.readTextFileSync = fakeReadTextFile;

describe("parseTransactions", () => {
  test("valid json file should give me data", () => {
    assertEquals(parseTransactions("data1.json"), {
      transactions: [{ type: "credit", amount: 100, account: "akshay" }],
    });
  });

  test("invalid json file should give me correct error", () => {
    const expected =
      "Error: Unable to process transactions. Please check the file and try again.";

    try {
      parseTransactions("invalidData.json");
    } catch (error) {
      assertEquals(error, expected);
    }
  });
});
