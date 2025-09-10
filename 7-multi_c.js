const x = parseInt(process.argv[2]);

// Check if it's NaN OR if it's a valid number but negative/zero
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else if (x > 0) {
    // Only print if x is a positive number
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
// If x is <= 0, do nothing (no else needed)