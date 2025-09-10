// Get the number of user arguments (total length minus 2 for node and script path)
const argCount = process.argv.length - 2;

// Check the number of arguments and print the appropriate message
if (argCount === 0) {
    console.log("No argument");
} else if (argCount === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}