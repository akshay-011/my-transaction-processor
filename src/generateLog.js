import { parseTransactions } from "./parseTransactions.js";
import { reconcileTransaction } from "./reconcileTransaction.js";

export const makeSummary = (summary, transaction) => {
  const { account } = transaction;
  const balance = summary[account] || 0;
  summary[account] = reconcileTransaction(balance, transaction);

  return summary;
};

export const processTransactions = (transactions) => {
  return transactions.reduce(makeSummary, {});
};

export const generateLog = (fileName) => {
  const transactions = parseTransactions(fileName);
  return processTransactions(transactions);
};
