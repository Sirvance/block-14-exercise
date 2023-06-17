// Write a for loop that prints the numbers 1 through 10 to the console.
for (let i = 0; i <= 10; i++) {
    console.log(i)
// Write a for loop that prints the even numbers from 2 to 20 to the console.
for (let i = 0; i <= 20; i++) {
    if(i%2===0)console.log(i)
}
// Write a while loop that counts down from 10 to 1 and prints the numbers to the console.
let i = 10
while(i>=1){
    console.log(i)
    i--
}
    
// Write a while loop that prompts the user to enter a number greater than 5. Keep prompting until the user enters a valid number.


// Write a for loop that prints the following pattern to the console:
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Write a for loop that prints the following pattern to the console:
// *****
// ****
// ***
// **
// *
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// bonus 
// Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated. The loop should print each generated number to the console.
// Write a for loop that calculates the factorial of a number. The factorial of n is the product of all positive integers from 1 to n. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// Write a for loop that prints the Fibonacci sequence up to a given number. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers. The first two numbers are 0 and 1. For example, if the given number is 10, the sequence should be 0, 1, 1, 2, 3, 5, 8.
// Write a while loop that prompts the user to enter a password. The loop should keep prompting until the user enters the correct password.
