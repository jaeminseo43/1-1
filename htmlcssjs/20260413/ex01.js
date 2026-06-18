function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        const element = my_string[i];
        console.log(element);
        if (element != letter)
        answer = answer + element;

    }
    //if element 가 같으면 answer에 추가하지 않음
    //else answer에 추가
    return answer;
}

const result = solution("abcdef", "f");
console.log(`result = ${result}`);
