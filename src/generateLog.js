import { reconcileTransaction } from "./reconcileTransaction.js";

export const makeSummary = (summary, transaction) => {
  const { type, amount, account } = transaction;
  const balance = summary[account] || 0;
  const reconciledBalance = reconcileTransaction(balance, { type, amount });
  summary[account] = reconciledBalance;

  return summary;
};
