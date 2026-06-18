const readline = require('readline');
console.log(readline);
readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("숫자를 입력하세요:\n ", function (num) {
    //num의 짝수판별 : num을 2로 나누었을때 나머지 없이 떨어지면 짝수
    if( num%2==0 ){
        console.log("짝수");
    }else{
        console.log("홀수");
    }
    rl.close();
})