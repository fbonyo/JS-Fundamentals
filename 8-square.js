// Get the size argument and convert to integer
const size = parseInt(process.argv[2]);

// Check if conversion was successful
if (isNaN(size)) {
    console.log("Missing size");
} else if (size > 0) {
    // Create square using nested loops
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
// If size is <= 0, do nothing (no output)