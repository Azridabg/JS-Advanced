//function solution(num) {
 //   return (n) => {
  //      return num + n;
  //  }
//}


function solution(number) {
    function add(a, b) {
        return a + b;
    }
    
    return add.bind(this, number);
    // return (n) => add(number, n); 
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));