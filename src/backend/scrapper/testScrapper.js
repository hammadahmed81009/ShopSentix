// testScrapper.js
const { spawn } = require('child_process');

const searchQuery = 'huawei+y7';  // Set your desired search query here

const childPython = spawn('python', ['WebScrapper.py', searchQuery]);

let pythonOutput = '';

childPython.stdout.on('data', (data) => {
    pythonOutput += data.toString();
});

childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

childPython.on('close', (code) => {
    if (code === 0) {
        const productDetails = JSON.parse(pythonOutput);
        const productObject = {
            products: productDetails
        };
        const productJSON = JSON.stringify(productObject);

        // Assuming you have a function to send the JSON to the frontend
        sendJSONToFrontend(productJSON);
    } else {
        console.error(`child process exited with code ${code}`);
    }
});

// Function to send the JSON to the frontend (replace this with your actual logic)
function sendJSONToFrontend(jsonData) {
    console.log(jsonData);
    // Implement your logic to send jsonData to the frontend
}
