/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Conditions and Loops Lab
   FE Lab 02
*/

/** Key Terms:
 *  Boolean Operators
 *  Loop
 *   - for
 *   - for of
 *   - while
 *   - do while
 *  
 *  Conditional / Control Flow Statement
 *  "Equal To": == 
 *  "Strictly Equals": ===   
 *  Increment ++
 *  Decrement --
 *  Index
 *  Modulus
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1: Driving the speed limit.. ? \n`);

/**
 * Step 1: Create two variables: speedLimit and mySpeed
 * Step 2: Set their values to numbers between 1 and 100.
 * 
 * Step 3: Conditionals:
 *             a. Using a conditional, determine if mySpeed is greater than the speedLimit
 *             b. If true, print "Slow Down! Mom is mad!" to the console
 *             c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
 *             d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */

var speedLimit = 40;
var mySpeed = 20;
var determineSpeed;

if (determineSpeed = mySpeed > speedLimit) {
   console.log('Slow Down! Mom is mad!');
   } else if (mySpeed === speedLimit) {
      console.log('Everyone is happy!');
   } else { 
      console.log('Speed up! Dad is mad!');
   }

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2: Is it time to wake up for work? \n`);

var alarmSet = true;
var weekDay = false;

if (alarmSet == true && weekDay == true) {
   console.log('Sound Alarm! Time for work!');
} else {
   console.log('I can sleep in!');
}


/**
 * Step 1: Create two variables, alarmSet and weekDay
 * Step 2: Set them to a boolean value
 * 
 * Step 3: Create a conditional... // if (true) {do thing} 
 *         to do something if the alarm is or isnt set & it is or isnt a week day. 
 *
 *         a. If alarm is set and it is a week day print "Sound Alarm! Time for work!" to the console
 *         b. Otherwise, print "I can sleep in!" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */



/*-------------------------------------------------------*/

console.log(`--------------------------
Question 3: Username & Password \n`);


/**
 * Step 1: Create two variables, username and password.
 * Step 2: Create a conditional/control flow statement:
 *         - if the username is "Tommy123" and the password is "12345"
 *	          or the username is "Timmy456" and the password is "6789", 
 *		       print "Admin Login Successful" to the console
 *
 *	        - otherwise, print "Admin Access Denied"
 * 
 * ↓ YOUR CODE HERE ↓ */

// This was my first attempt at solving the problem before watching the video. When created, I did not know about the '||' or operator.

var userName = 'Tommy123';
var password = '12345';

if (userName == 'Tommy123' && password == '54321') {
   console.log('Admin Login Successful.');
} else {
   console.log('Admin Access Denied!');
}

// Second Attempt: Using the Logical '||' OR Operator.

if (userName == "Tommy123" && password == "12345" || userName == "Timmy456" && password == "6789" ) {
   console.log("Admin Login Successful");
} else {
   console.log("Admin Access Denied!");
}

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 4: Student Class \n`);

/**
 * Step 1: Create a variable called studentClass. Don't give it a value yet.
 *         There is a variable called studentGrade. It could be any number from 0-12.
 * 
 * Step 2: Write code that will change the value of studentClass based on studentGrade
 *          - 0-6 will be Elementary
 *          - 7-8 will be Middle
 *          - 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior 
 *          
 *         Any other value should return "Error" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */



// Attempt #1
/* This attempt failed to:
      1. Declare studentClass without a value;
      2. Assign studentGrade a value;
      3. Created an unnecessary variable, schoolYoureIn;
      4. Fist attempt (erased) created an infinity loop. 

      Process, before I figure out what, when, where, and why I went wrong. I will watch the video explaining the logic for the intended solution and revisit what I could do to improve the logic I used for this attempt.

      Learnings: I, for some reason, thought it wanted me to use the increment operator to solve this problem.
*/

let studentClass = 11; 
let studentGrade;
let schoolYoureIn;

while (studentGrade <= 12, schoolYoureIn = ++studentClass) {
   if (studentClass = {start:0, end: 6} ){
      console.log("Elementary");
   } else if (studentClass = {start:7, end:8}) {
      console.log("Middle");
   } else if (studentClass = 9) {
      console.log("Freshman");
   } else if (studentClass = 10) {
      console.log("Sophmore");
   } else if (studentClass = 11) {
      console.log("Junior");
   } else if (studentClass = 12) {
      console.log("Senior");
   } else {
      console.log("Error, you are not in school.");
   }
}

console.log(studentGrade);

// Attempt #2 (Video Logic)
let studentClass2;
let studentGrade2 = 11;

if (studentGrade2 >= 0 && studentGrade2 <=6) {
   studentClass2 = "Elementary";
} else if (studentGrade2 == 7 || studentGrade2 == 8) {
   studentClass2 = "Middle";
} else if (studentGrade2 == 9) {
   studentClass2 = "Freshman"; 
} else if (studentGrade2 == 10) {
   studentClass2 = "Sophmore";
} else if (studentGrade2 == 11) {
   studentClass2 = "Junior";
} else if (studentGrade2 == 12) {
   studentClass2 = "Senior";
} else {
   console.log("You are not enrolled in school.");
}

console.log(studentClass2);


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 5: Loops! \n`);

/**
 * Step 1: Write a "for loop" that will iterate backwards and print 10 to -10.
 * Step 2: Write a "do/while" loop that will prints 1 through 50.
 * Step 3: Modify the previous "do/while" loop.
 *         Print the iterator if the remainder (% // modulus) is 0 when divisible by 4.
 * 
 * ↓ YOUR CODE HERE ↓ */

/* 
What Do I Need?
i = 0 / Start;
i == -10 / Stop Condition
i-- (Postfix Increment)
*/

//Attempt #1

/*for (i = 10, i <= 10 || i >= -10, --i) {
   do while {

   }
}
*/


// //Attempt #2
// for (let i = 10; i >= -10; i--) {
//    console.log(i);
// }


// do while loop
let count = 1;

 do {
   console.log(count);
   count++; 
} while (count <=50);

// Second 'do while' loop.
   // 1. Create a variable count1
   // 2. Create a variable numbers and assign it an empty array.
   // Make the loop count 223 to 234. 
   // 3. log the number in an array to the console.

let count1 = 223; 
let numbers = [];

do {
   numbers.push(count1);
   ++count1;
} while (count1 <= 234);

console.log(numbers);
console.log(numbers.length);

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 6: Debugging an infinite loop! \n`);

/**
 * Step 1: Read through the written code below.
 *         Figure out why it's causing an infinite loop & fix the syntax.
 * Step 2: Uncomment out to test
 * 
 * ↓ YOUR CODE HERE ↓ */

   /*    
   for (let i = 11; i > 10; i++) { 
      console.log(i);   
   } 
  */

   for (let i = 11; i > 10 && i < 100; i++) { 
      console.log(i);   
   } 



console.log('-----------Finished------------')

let b = "blue";

console.log(b == "blue");
