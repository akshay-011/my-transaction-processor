import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { makeSummary } from "../src/generateLog.js";

describe("makeSummary", () => {
  test("no summary exists and a new data should create account deatils", () => {
    assertEquals(
      makeSummary({}, { type: "credit", amount: 100, account: "akshay" }),
      { akshay: 100 }
    );
  });

  test("summary exists and a transaction should modify account deatils", () => {
    assertEquals(
      makeSummary(
        { akshay: 100 },
        { type: "credit", amount: 100, account: "akshay" }
      ),
      { akshay: 200 }
    );
  });

  test("no summary exists and a transaction of debit should give me negative balance", () => {
    assertEquals(
      makeSummary({}, { type: "debit", amount: 100, account: "akshay" }),
      { akshay: -100 }
    );
  });
});
