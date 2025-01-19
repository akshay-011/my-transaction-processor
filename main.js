import { generateLog } from "./src/generateLog.js";

const main = () => {
  const fileName = Deno.args[0];
  const summary = generateLog(fileName);
  console.log(summary);
};

main();
