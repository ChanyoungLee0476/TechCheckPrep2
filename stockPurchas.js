"use strict";
/*
Author: Chanyoung Lee
Date: 9/17/2023
Description: A practice for Tech-check

A. Assign the value 25.625 to the variable cost_per_share.
B. Assign the value 400 to the variable number_of_shares.
C. Assign the product of cost_per_share and number_of_shares to the variable markdown.
D. Display the value of the variable markdown in the console application.
*/

let readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    // Input
    // The information of the variables
        let cost = parseFloat(readlineSync.question("Enter what is the cost per share: "));
        let number = parseFloat(readlineSync.question("Enter what is the number of shares: "))
        
    // Process
    //  the product of cost_per_share and number_of_shares to the variable markdown.
        let markdown = cost + number;

    // Output
    // the value of the variable markdown 
        console.log("Markdown: " + markdown.toFixed(2));

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}