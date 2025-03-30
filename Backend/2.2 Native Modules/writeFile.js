const fs = require("fs");

fs.writeFile("./allFiles/write.txt", "This is a file for write", (err) => {
    if (err) throw err;
    console.log("The file has been created");
});