function check(x1, y1, x2, y2) {
    let x1y1x2y2 = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    let x1y1ToCartesian = Math.sqrt((0 - x1) * (0 - x1) + (0 - y1) * (0 - y1));
    let x2y2ToCartesian = Math.sqrt((x2 - 0) * (x2 - 0) + (y2 - 0) * (y2 - 0));;

    if (Number.isInteger(x1y1ToCartesian)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }




    if (Number.isInteger(x2y2ToCartesian)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }




    if (Number.isInteger(x1y1x2y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
