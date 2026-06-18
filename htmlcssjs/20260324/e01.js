const readline = require('readline');
console.log(readline);
readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("숫자를 입력하세요:\n ", function (num) {
    console.log(num);
    rl.close();
})