const fs = require("fs");

fs.readFile("./allFiles/read.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});