function pie(arr, start, end) {

    let startIndex =  arr.indexOf(start);
    let endIndex = arr.indexOf(end);

    let resultArr = arr.slice(startIndex, endIndex + 1);
    return resultArr;

}
console.log(pie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 
'Key Lime Pie', 'Lemon Meringue Pie'));