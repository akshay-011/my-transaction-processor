import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import {
  generateLog,
  makeSummary,
  processTransactions,
} from "../src/generateLog.js";
import { fakeReadTextFile } from "./parseTransactions_test.js";

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

describe("processTransactions", () => {
  test("empty transactions should give empty object", () => {
    assertEquals(processTransactions([]), {});
  });

  test("one transaction of credit should give one person", () => {
    assertEquals(
      processTransactions([
        {
          account: "akshay",
          type: "credit",
          amount: 100,
        },
      ]),
      { akshay: 100 }
    );
  });

  test("two transaction of credit should give two person", () => {
    assertEquals(
      processTransactions([
        {
          account: "akshay",
          type: "credit",
          amount: 100,
        },
        {
          account: "aadi",
          type: "debit",
          amount: 100,
        },
      ]),
      { akshay: 100, aadi: -100 }
    );
  });
});

Deno.readTextFileSync = fakeReadTextFile;

describe("generateLog", () => {
  test("valid json data should give output", () => {
    assertEquals(generateLog("data1.json"), {
      akshay: 100,
    });
  });

  test("valid json data should give output", () => {
    assertEquals(generateLog("data2.json"), {
      inkeet: 100,
      aadi: -100,
    });
  });
});
