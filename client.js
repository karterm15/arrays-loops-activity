/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies = [ 'woodworking', 'fishing', 'art'];
for (let i = 0; i < hobbies.length; i++){
     console.log(hobbies [i]);
}
console.log(' total number of hobbies', hobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors = ['teal', 'red', 'purple', 'green', 'teal'];

let tealCount = 0;

for (let i=0; i<colors.length; i++){
     if (colors[i] === 'teal');
     tealCount++;
     console.log
}
console.log('how many times teal is in array', tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let numbers =[1, 2, 3, 4, 5, 6 ];
console.log(numbers); //just to logg numbers in console.

let oddNumbers = [];

for(let i=0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
     oddNumbers.push(numbers[i]);
    } 
}
console.log('logging odd numbers', oddNumbers);

let evenNumbers = [];

for (let i=0; i < numbers.length ; i ++) {
     if(numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
     }
    }
    console.log('logging even numbers', evenNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let weather = [ 'rain', 'snow', 'sunny', 'cloudy' ];
let sunny = true;

for (let i = 0; i < weather.length; i++) {
     weather['sunny'] = false;
   }
console.log('is it sunny outside', weather['sunny']);

// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */
let zeros = [3, 0, 2, 8, 0, 0, 0];

console.log(zeros);

while (zeros.length > 0 && zeros[zeros.length - 1] === 0){
     zeros.pop();
}
console.log(zeros);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */
let array = [2, 2, -3, 7, 4, 1, 7, 12, 8];
console.log(array);

let high = array[0];
let low = array[0];

for (let i=1; i < array.length; i++){
     if(array[i] > high){
          high = array[i];
     }
     if(array[i] < low){
          low = array[i];
     }
}
console.log('high is',high, 'low is', low);




// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3