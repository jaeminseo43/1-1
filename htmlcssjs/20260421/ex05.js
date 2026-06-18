const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('찾을 단어를 입력하세요:',function(data){
    let dic = {
        [obj]: "소년"
    }
    console.log(dic[data]);
    rl.close();//종료하기 위해서 close()함수 사용
});
//오타 저장 새로고침