const names = require("./4-names");
const saHi = require("./5-utils");
const data = require("./6-alternative-flvor");
require("./7-mind-granade");

names.map((name) => {
  saHi(name);
});

console.log(data);

data.items.map((name) => {
  saHi(name);
});

saHi(data.singlePerson.name);
