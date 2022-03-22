// Code your solution in this file!
function distanceFromHqInBlocks(distance, hq = 42) {
    return Math.abs(distance - hq);
}

function distanceFromHqInFeet(start, destination = 42) {
    let x = distanceFromHqInBlocks(start, destination);
    return x * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}



function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start, destination);
    if (x < 400) {
        return 0;
    } else if (x > 400 && x < 2000) {
        return ((x - 400) * .02);
    } else if (x > 2000 && x < 2500) {
        return 25;
    } else if (x > 2500) {
        return "cannot travel that far";
    }
}

// (x<400){  return 0;} PASS
// (400 > x< 2000){ return ((x-400)*.02);} PASS
// (2000 > x < 2500) { return 25;} PASS
// (x > 2500) {return "cannot travel that far"} PASS

//(x < 400); return 0;
      //  (400 > x < 2000); return ((x - 400) * .02);
       // (2000 > x < 2500); return 25;
       // (x > 2500); return "cannot travel that far";
