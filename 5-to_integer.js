// Get the first argument
const firstArg = process.argv[2];

// Convert to integer
const convertedNumber = parseInt(firstArg);

// Check if the conversion was successful (not NaN)
if (isNaN(convertedNumber)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${convertedNumber}`);
}