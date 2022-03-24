// Code your solution in this file!
const feetInOneBlock = 264;

function distanceFromHqInBlocks(block) {
    const hqBlock = 42;
    let blocksFromHq = distanceInBlocks(hqBlock, block);
    return blocksFromHq;
}

function distanceInBlocks(startBlock, destinationBlock) {
    return Math.abs(startBlock-destinationBlock);
}

function distanceFromHqInFeet(block) {
    let distanceInBlocks = distanceFromHqInBlocks(block);
    let distanceInFeet = distanceInBlocks * feetInOneBlock;
    return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let blocksTravelled = distanceInBlocks(startBlock, endBlock); 
    let distanceInFeet = blocksTravelled * feetInOneBlock;
    return distanceInFeet;
}

function calculatesFarePrice(startBlock, destinationBlock) {
    const pricePerFeet = 0.02;
    const freeDistance = 400;
    const minLongDistanceInFeet = 2000;
    const maxLongDistanceInFeet = 2500;
    const flatLongDistanceFare = 25;
    let distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);
    let fare;

    if (distanceInFeet <= freeDistance) {
        fare = 0;
    }
    else if (distanceInFeet > minLongDistanceInFeet && distanceInFeet < maxLongDistanceInFeet) {
        fare = flatLongDistanceFare;
    }
    else if (distanceInFeet >= maxLongDistanceInFeet) {
        fare = `cannot travel that far`
    }
    else {
        fare = (distanceInFeet - freeDistance) * pricePerFeet;
    }
    return fare;
}