const crypto = require("crypto");

const id = crypto.randomBytes(12).toString("hex");

console.log(id);
