function aa(){
    let num = 0;
    while(1){
        console.log('무한루프')
        if (num == 1){
            num++;
            console.log('컨티뉴 걸림');
            continue;

        }
        if (num == 3){
            break;
        }
        num++;
    }
}
aa();