const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter file name (old): ", fold => {
    rl.question("Enter file name (new): ", fnew => {
        fs.rename(`${fold}.txt`, `${fnew}.txt`, err => {
            if (err) throw err;
            console.log("File renamed");
        })
        rl.close();
    });
});