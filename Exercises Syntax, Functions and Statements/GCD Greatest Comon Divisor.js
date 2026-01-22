function gcd(num1, num2) {
if(num1 > num2) { 

for(let i = num2; i > 0;i--) {
if(num1 % i ==0 && num2 % i ==0) {
    console.log(i);
    break;
}
}


}
else {
    for(let i = num1; i > 0;i--) {
        if(num1 % i ==0 && num2 % i ==0) {
            console.log(i);
            break;
        }
        }
}
}
gcd(5, 15);