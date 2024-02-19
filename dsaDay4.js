// Function to swap the values of two variables
function swapVariables(var1, var2) {
    // Temporary variable to hold the value of var1
    let temp = var1;

    // Assign var2's value to var1
    var1 = var2;

    // Assign the temporary variable's value (initial var1) to var2
    var2 = temp;

    // Return an array containing the swapped values
    return [var1, var2];
}

// Example usage
let a = 5;
let b = 10;
console.log("Before swapping: a =", a, ", b =", b);

// Call the swapVariables function and store the result in an array
const swappedValues = swapVariables(a, b);

// Assign the swapped values back to the original variables
a = swappedValues[0];
b = swappedValues[1];

console.log("After swapping: a =", a, ", b =", b);
