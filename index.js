// Code your solution in this file!
const scuberHeadquarters = 42;
const block = 264;

function distanceFromHqInBlocks(pickUpLocation) {
   return Math.abs(pickUpLocation - scuberHeadquarters);
  }

  function distanceFromHqInFeet(pickUpLocation) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    let valueFromdistanceFromHqInBlocks = distanceFromHqInBlocks(pickUpLocation);
     // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return (valueFromdistanceFromHqInBlocks * block);
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * block;
  }

  function calculatesFarePrice(start, destination) {
    const standardFare = 25;
    let result = distanceTravelledInFeet(start, destination);
     if (result <= 400) {
        return 0;
     } else if(result > 400 && result <= 2000) {
        return (result - 400) * 0.02;
     }else if(result > 2000 && result < 2500) {
        return standardFare;
  }else{
    return "cannot travel that far";
  }

  }