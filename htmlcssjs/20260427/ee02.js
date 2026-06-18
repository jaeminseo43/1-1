function solution(n) {
    var answer = '';
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] === n[j]) {
                answer = n[i];
                break;
            }
        }
    }
    return answer;
}
