const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the file name to be deleted: ", fname => {
    fs.unlink(`${fname}.txt`, err => {
        if (err) throw err;
        console.log("File deleted");
    })
    rl.close();
});