function timeToWalk(totalSteps, personStepLength, speedKmH) {
    let metersToUni = totalSteps * personStepLength;
    let speed = (speedKmH * 1000) / 3600;
    let rest = Math.floor(metersToUni / 500) * 60;
    let time = metersToUni / speed + rest;
  
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');
  
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  timeToWalk(3500, 0.54, 5);