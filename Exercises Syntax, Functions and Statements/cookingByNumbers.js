function cook(num, o1, o2, o3, o4, o5) {
num = Number(num);
let arr = [o1, o2, o3, o4, o5];

function chop(num) {
return num /=2;
}

function dice(num) {
return Math.sqrt(num);
}

function spice(num) {
return num+=1;
}

function bake(num) {
    return num *=3;
}

function fillet(num) {
return num *= 0.8;
}


for(let i =0; i < arr.length;i++) {
    if(arr[i] == 'chop') {
        num = chop(num);
        console.log(num);
    }
    else if(arr[i] == 'dice') {
        num = dice(num);
        console.log(num);
    }
    else if(arr[i] == 'spice') {
        num = spice(num);
        console.log(num);
    }
    else if(arr[i] == 'bake') {
        num = bake(num);
        console.log(num);
    }
    else if(arr[i] == 'fillet') {
        num = fillet(num);
        console.log(num);
    }
}

}


cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');