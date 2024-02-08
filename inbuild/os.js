const os = require("os");

console.log("free memory", os.freemem()/1024 /1024 /1024);
console.log("tot m", os.totalmem()/1024 /1024 /1024);
console.log("os ver", os.version());
console.log("platform", os.platform());
console.log("cpus",os.cpus());
console.log("architecture",os.arch());
console.log("uptime",os.uptime())
console.log