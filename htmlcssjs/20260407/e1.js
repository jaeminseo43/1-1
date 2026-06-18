//선언부
//argument가 자동으로 생성.
//매개변수 보내면 생성

function doA(){
    console.log('A');
    return 10;

}
function doB(a,b){
    console.log(`a = ${a} b=${b}`);
}
//
//호출부
const ret = doA(10);
console.log(ret);

doB(10);
