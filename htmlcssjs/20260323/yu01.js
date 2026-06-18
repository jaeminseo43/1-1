var a = 10;
var a = 20;
console.log(a);

let b = 10;
b = 20;
console.log(b);

const c = 10;
c = 40;
console.log(c);

const d = {
    a: 10, b: 20, c: function(kk) {
        console.log('kk = ' + kk);
        console.log('cc');
        return 10; 
    }
};
d.a = 30;
d.ee = 5032;
d.eeee = 29023;
console.log(d);
console.log(d.a); 
console.log(d.b);
d.c(d.b);
console.log(d.c());
