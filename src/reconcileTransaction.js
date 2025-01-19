export const reconcileTransaction = (balace, report) => {
  const amount = report.amount || 0;

  if (report.type === "debit") {
    return balace - amount;
  }

  return balace + amount;
};
