console.log(!true);
console.log(!false);

if (!false && 10 < 20 || false) {
    console.log("출력");
}
const tt = '';
if (tt) { console.log("tt true"); }

const test = {}
if (test){ console.log("test true"); }
// !는 논리 부정 연산자입니다. !true는 false가 되고, !false는 true가 됩니다. 따라서 if문에서 !false는 true로 평가되어 "출력"이 출력됩니다. 또한, 빈 문자열 ''는 falsy 값이므로 if (tt) 조건은 false로 평가되어 "tt true"는 출력되지 않습니다. 반면에, 빈 객체 {}는 truthy 값이므로 if (test) 조건은 true로 평가되어 "test true"가 출력됩니다.
// !는 논리 부정 연산자입니다. !true는 false가 되고, !false는 true가 됩니다. 따라서 if문에서 !false는 true로 평가되어 "출력"이 출력됩니다. 또한, 빈 문자열 ''는 falsy 값이므로 if (tt) 조건은 false로 평가되어 "tt true"는 출력되지 않습니다. 반면에, 빈 객체 {}는 truthy 값이므로 if (test) 조건은 true로 평가되어 "test true"가 출력됩니다.

if (str){
    console.log("실행 되나?");
    console.log(Boolean(str));
}