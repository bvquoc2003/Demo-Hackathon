fs = require("fs");
var content = fs.readFileSync("data.json", { encoding: "utf8" });
var arr = JSON.parse(content);
console.log(arr);