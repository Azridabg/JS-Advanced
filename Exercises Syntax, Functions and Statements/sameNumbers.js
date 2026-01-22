function sameNumber(num) {
    num += '';
let arrNum = num.split('');
let sum = 0;
let areSame = true;

for(let i =0; i < arrNum.length - 1;i++) {
    sum += Number(arrNum[i])
    if(Number(arrNum[i]) != Number(arrNum[i + 1])) {
        areSame = false;
    }
}
sum += Number(arrNum[arrNum.length - 1])

console.log(areSame);
console.log(sum);
}
sameNumber(2224)