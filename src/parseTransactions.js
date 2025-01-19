export const parseTransactions = (fileName) => {
  try {
    const fileContent = Deno.readTextFileSync(fileName);
    return JSON.parse(fileContent);
  } catch {
    throw "Error: Unable to process transactions. Please check the file and try again.";
  }
};
