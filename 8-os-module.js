const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system update is ${os.uptime} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
};

console.log(
  `Syteme type ${currentOS.name} and release is ${currentOS.release}.`
);
