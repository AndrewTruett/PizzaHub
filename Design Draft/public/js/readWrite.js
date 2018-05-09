var fs = require("fs");
console.log("\n *STARTING* \n");
var contents = fs.readFileSync("../system/customers.json");
var data = JSON.parse(contents);
console.log("User Name:",data.customers[0].memID);
