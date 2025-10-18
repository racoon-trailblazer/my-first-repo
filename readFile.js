const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter filenmae to read: ", fname => {
    fs.readFile(`${fname}.txt`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log("File content: ", data);
    });
    rl.close();
});