function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        const arr_item = arr1[i];
        need = true;
        for(let j = 0; j < delete_list.length;j++){
            const delete_item = delete_list[j];
            if(arr_item == delete_item)
                need = false;
                console.log(`arr_item ${arr_item} delete_item ${delete_item}`);
                break;
        }
        
    }
    return answer;
}
// i = 0 , j = 0,5
// i = 1 , j = 0,5
// i = 2 , j = 0,5
solution([1, 2, 3], [3, 4, 5]);
