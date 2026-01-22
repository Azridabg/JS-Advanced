function radar(speed, way) {
    let limits = {
      motorway: 130,
      interstate: 90,
      city: 50,
      residential: 20,
    };
  
    let status = undefined;
  
    if (speed <= limits[way]) {
      console.log(`Driving ${speed} km/h in a ${limits[way]} zone`);
    }
    else if (speed > limits[way]) {
  
  
      if (speed - limits[way] <= 20) {
        status = "speeding";
      } else if (speed - limits[way] <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
  
  
      console.log(`The speed is ${speed - limits[way]} km/h faster than the allowed speed of ${limits[way]} - ${status}`);
    }
  }

radar(-5, 'motorway');