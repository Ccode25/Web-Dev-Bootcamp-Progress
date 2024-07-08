import inquirer from "inquirer"; // Importing the inquirer module for creating interactive command-line prompts
import qr from "qr-image"; // Importing the qr-image module for generating QR codes
import fs from "fs"; // Importing the fs (file system) module for file operations

// Prompt the user to input a URL
inquirer
  .prompt([
    {
      message: "Type your URL: ", // The message displayed to the user
      name: "URL" // The name of the answer key
    }
  ])
  .then((answers) => {
    const url = answers.URL; // Retrieve the URL entered by the user
    var qr_svg = qr.image(url); // Generate a QR code image from the URL
    qr_svg.pipe(fs.createWriteStream("qrimg.png")); // Save the QR code image to a file named 'qrimg.png'
    
    // Write the URL to a text file named 'URL.txt'
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err; // If there is an error, throw an exception
      console.log("File has been saved!"); // Log a success message
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Handle the case where the prompt couldn't be rendered in the current environment
    } else {
      // Handle any other errors
    }
  });
