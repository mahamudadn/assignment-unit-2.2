// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make avariable called name and set its value as Dane.                                                                                                                                                                                                                                                           
// We check if name is equal to marry, then 
// we console.log 'Hi Mary!'
// other wise 
// we console.log ' How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}

*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a varaible called secret, but we did'nt give a value.
// we create another variable called code and we give avalue of 123. then,
// we check if code === 123 and 
// give variable secret avalue 'super'
// give varaible code a new value which is 246. then 
// we check if the value of code is greater than 250 and give varaible secret a new string value of 'duper' then,
// we console.log(secret) ' which will print out the 'super' in the console.'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we create avariable isStudent and  gave a bolean value which is 'true'
// we create 2nd variable age and we gave a number value of 34.
// then we create a 3rd variable with the name of zip and gave a number value of 55407. 
//then, we check if both isStudent is true and zip is greater than 80000 and console.log(`You're a student on the West Coast!`)
// then, we check if isStudent is equal to 'false' and the age value is les than 30 and console.log('What are your hobbies?') 
// then, we write another else if statement which checks if isStudent is eqaul to true and we console.log('Welcome to Prime!') 
//then we write the code that we will excute, if all of the above situations are not met and we tell our javascript to console log.('How about the weather?')

// in this code : 'Welcome to Prime!' will be excuted because, the first if statement checks if both values are true, in this case only one is true,
// then the second if needs one of the two values to be true, in this case none is true, then it champs to the 3rd code if the code is true, in this case the code is true and the console.log('Welcome to Prime!').
// which means the the last 'else' code will not be excuted, since the javascript got the true value it was looking for.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX -- in the variable colorOne eqaul to red and colorTwo equal to blue. 
// But in the instruction colorOne & colorTwo is : 'blue' & 'red', so they  should be blue and red respectively.
//Also, in the if statement both colorOne and colorTwo should have the value of 'purple'. wich in this case we only have colorOne assigned to purple.
// 

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX-- we create  avariable called temp and time and give a value 40 and 4 respectively.
// in the instruction, the logical operrator we are suposed to use is &&,  which checks both opperators to be true.
// In the code, || or is used, which checks either of the conditions to be true. in this case both are true and 
// the console.log('throw away the food!') will be printed out.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX-- we write the both variables as per the instruction.
// In the instruction it says we should check if age is greater than or equal  minAge and console.log('enter').
// But in the code its using 'minAge is less than or equal to age' which is other way around and console.log('no entry'), 
// rather than console.log('enter') as per innstructed.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

