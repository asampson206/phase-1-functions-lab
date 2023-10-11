// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue >= 42){return someValue - 42}
    else if(someValue<=42){return 42 - someValue}
}
function distanceFromHqInFeet(otherValue) {
    let someValue = distanceFromHqInBlocks(otherValue);
    if (someValue >= 42) {
        return someValue - 42;
    } else if (someValue === 1) {
        return 264;
    } else {
        return someValue * 264;
    }
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {return (start - destination) * 264}
    else return (destination - start) * 264}

function calculatesFarePrice(start, destination) {
let distance = distanceTravelledInFeet(start, destination)
if(distance <= 400) {
    return 0
}
if(distance < 2000) {
    return (distance - 400) * .02
 }
 if (distance < 2500){return 25}
 if(distance > 2500){return 'cannot travel that far'}
}
