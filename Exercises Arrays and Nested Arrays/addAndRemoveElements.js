function doSth(commands) {
    let num = 1;
    let myArr = [];

for (let command of commands) {
        if (command == 'add') {
            myArr.push(num++);
        }
        else if (command == 'remove') {
            if(myArr.length > 0) {
                 myArr.pop();
            }
            num++;
        }
    }
    
    if(myArr.length == 0){
        console.log("Empty");
    }
    else{
        console.log(myArr.join('\n'));
    }
    
}


doSth(['add', 'add', 'remove', 'add', 'add']);