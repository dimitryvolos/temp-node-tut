const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", { encoding: "utf-8" });
const second = readFileSync("./content/second.txt", { encoding: "utf-8" });

writeFileSync("./content/result-sync.txt", `${first} -- ${second}`, {
  flag: "a",
});

const result = readFileSync("./content/result-sync.txt", { encoding: "utf-8" });

console.log(result);
