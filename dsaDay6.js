function kilometersToMiles(kilometers) {
    // 1 kilometer is approximately 0.621371 miles
    return kilometers * 0.621371;
}

// Example usage:
const kilometers = 10;
const miles = kilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
