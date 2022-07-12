// // Modules
// const names = require("./4-names");
// const sayHi = require("./5-utils");
// const os = require("os");

// // sayHi("Susan");
// // sayHi(john);
// // sayHi(peter);

// sayHi(names.john);

// const user = os.userInfo();

// console.log(user);
// console.log(`The system Update is ${os.uptime()} seconds.`);

// --------------------------------

// const path = require("path");
// console.log(path.sep);

// const filePath = path.join("/content/", "subfolder", "text.txt");
// const base = path.basename(filePath);
// console.log(filePath);

// const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
// console.log(absolute);

// ---------------------------------

// const fs = require("fs");

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// writeFileSync("./content/third.txt", "This is the third file.");

// const third = readFileSync("./content/third.txt", "utf-8");

// console.log(third);

// --------------------------------

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Result: ${first}, ${second}`,
      {
        flag: "a",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const third = result;
        console.log(third);
      }
    );
  });
});
