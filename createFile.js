const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter filename to be created: ", fname => {
    rl.question("Enter File content: ", content => {
        fs.writeFile(`${fname}.txt`, content, err => {
            if (err) throw err;
            console.log("File created and data written");
        });
         rl.close();
    });
});