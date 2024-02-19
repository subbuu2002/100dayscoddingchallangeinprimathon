// Function to find the largest number among three numbers
function findLargestNumber(num1, num2, num3) {
    // Assuming num1 is the largest initially
    let largest = num1;

    // Compare num2 with largest
    if (num2 > largest) {
        largest = num2;
    }

    // Compare num3 with largest
    if (num3 > largest) {
        largest = num3;
    }

    // Return the largest number
    return largest;
}

// Example usage
const num1 = 10;
const num2 = 25;
const num3 = 15;
const largestNumber = findLargestNumber(num1, num2, num3);
console.log("The largest number among", num1 + ",", num2 + ", and", num3, "is:", largestNumber);
