import inquirer from "inquirer"; // Importing the inquirer module for creating interactive command-line prompts
import qr from "qr-image"; // Importing the qr-image module for generating QR codes
import fs from "fs"; // Importing the fs (file system) module for file operations
import path from "path"; // Importing the path module for handling file paths

// Prompt the user to input the name of the QR code SVG file and the URL for the QR code
inquirer
    .prompt([
        { 
            message: "Name of QR code SVG file (without extension):", // The message displayed to the user
            name: "qrName" // The name of the answer key for the file name
        },
        { 
            message: "URL for QR code:", // The message displayed to the user
            name: "qrHref" // The name of the answer key for the URL
        }
    ])
    .then((answers) => {
        console.log("Answers: ", answers); // Log the user's answers to the console
        const { qrName, qrHref } = answers; // Destructure the answers object to get qrName and qrHref
        try {
            const qr_svg = qr.imageSync(qrHref, { type: 'svg' }); // Generate a QR code image synchronously and get it as an SVG
            const filePath = path.resolve(`${qrName}.svg`); // Resolve the file path for the SVG file
            fs.writeFile(filePath, qr_svg, (err) => { // Write the QR code SVG to a file
                if (err) {
                    console.error("Error writing the file:", err); // Log any errors that occur during file writing
                    throw err; // Throw the error to stop further execution
                }
                console.log(`QR code SVG has been saved as ${filePath}`); // Log a success message with the file path
            });
        } catch (error) {
            console.error("Error generating QR code:", error); // Log any errors that occur during QR code generation
            throw error; // Throw the error to stop further execution
        }
    })
    .catch((error) => {
        console.error("Error during prompt:", error); // Log any errors that occur during the prompt
        throw error; // Throw the error to stop further execution
    });
