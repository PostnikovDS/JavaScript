let a = 2;
let x = 1 + (a *= 2);

console.log(a); //4
console.log(x); //5

/*a будет равна 4, b = 5.
Это получилось, потому что
переменная а изменила своё значение внутри переменной х, при этом (а *= 2) == (а = а * 2).
Значение х = 1 + (значение а)*/