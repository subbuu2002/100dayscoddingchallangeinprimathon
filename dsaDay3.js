// Function to find the square root of a number
function findSquareRoot(number) {
    // Check if the number is negative
    if (number < 0) {
        return "Square root of negative numbers is undefined";
    }
    
    // Calculate square root using Math.sqrt() function
    const squareRoot = Math.sqrt(number);
    
    return squareRoot;
}

// Example usage
const number = 16;
const squareRoot = findSquareRoot(number);
console.log("The square root of", number, "is:", squareRoot);
