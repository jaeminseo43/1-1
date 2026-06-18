const readline = require('readline');
const fs = require('fs');
const data = fs.readFileSync('ew1.js', 'utf-8');
console.log(data);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
}
rl.question('찾을 단어를 입력하세요:',function(data){
    let result = dic[data];
    console.log(dic[data]);
    rl.close();
});
