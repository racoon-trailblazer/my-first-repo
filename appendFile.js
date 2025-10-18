const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter content to append in file 'hello.txt': ", content => {
    fs.appendFile("hello.txt", `\n${content}`, err =>{
        if (err) throw err;
        console.log("Hello.txt appended successfully");
    })
    rl.close();
});