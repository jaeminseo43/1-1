let dic = {
    boy: "소년",
    girl: "소녀",
    friend: "친구"
}

console.log(dic);
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);  

dic.apple = "사과";
dic.ten = 10;
delete dic.friend;
console.log(dic.friend);

console.log(dic.apple);
console.log(dic.ten);