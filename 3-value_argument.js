// Get the first argument (process.argv[2])
const firstArgument = process.argv[2];

// Check if the first argument exists
if (firstArgument === undefined) {
    console.log("No argument");
} else {
    console.log(firstArgument);
}