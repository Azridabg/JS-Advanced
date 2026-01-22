function createCar(carObj) {
let resultCar = {
    model:carObj.model,
    engine:{},
    carriage:{},
    wheels:[],
};

if(carObj.power > 120) {
    resultCar.engine.power = 200;
    resultCar.engine.volume = 3500;
    resultCar.carriage.type = carObj.carriage;
    resultCar.carriage.color = carObj.color;
}
else if(carObj.power > 90) {
    resultCar.engine.power = 120;
    resultCar.engine.volume = 2400;
    resultCar.carriage.type = carObj.carriage;
    resultCar.carriage.color = carObj.color;
}
else {
    resultCar.engine.power = 90;
    resultCar.engine.volume = 1800;
    resultCar.carriage.type = carObj.carriage;
    resultCar.carriage.color = carObj.color;
}

if(carObj.wheelsize % 2 == 0) {
    resultCar.wheels.push(carObj.wheelsize - 1);
    resultCar.wheels.push(carObj.wheelsize - 1);
    resultCar.wheels.push(carObj.wheelsize - 1);
    resultCar.wheels.push(carObj.wheelsize - 1);
}
else {
    resultCar.wheels.push(carObj.wheelsize);
    resultCar.wheels.push(carObj.wheelsize);
    resultCar.wheels.push(carObj.wheelsize);
    resultCar.wheels.push(carObj.wheelsize);
}
return resultCar;
}

console.log(createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));