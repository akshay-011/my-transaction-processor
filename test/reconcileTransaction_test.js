import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { reconcileTransaction } from "../src/reconcileTransaction.js";

describe("reconcileTransaction", () => {
  test("both empty should give me empty object", () => {
    assertEquals(reconcileTransaction(0, {}), 0);
  });

  test("current balace zero and a credit should give amount", () => {
    assertEquals(reconcileTransaction(0, { type: "credit", amount: 100 }), 100);
  });

  test("current balace 100 and a debit of 100 should give 0", () => {
    assertEquals(reconcileTransaction(100, { type: "debit", amount: 100 }), 0);
  });

  test("current balace 0 and a debit of 100 should give -100", () => {
    assertEquals(reconcileTransaction(0, { type: "debit", amount: 100 }), -100);
  });
});
