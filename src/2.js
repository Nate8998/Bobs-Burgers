/* Acceptance Criteria
// As a function,
// I want to be able to find number of odd numbers in any given array of numbers,
// So that I can return it.
const { assertEquals } = require("../test-framework");
const { oddNumbersInArray } = require("../src/arrayFunctions");

// initial arrange
let expectedOutput, actualOutput, result;
let input = [];
let testName = ``;

// TEST 1
// arrange
testName = `TEST 1 - Return number of odd numbers in array of 1`;
input = [5];
expectedOutput = 1;
// act
actualOutput = oddNumbersInArray(input);

// assert 
result = assertEquals(expectedOutput, actualOutput)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// TEST 2
// arrange
testName = `TEST 2 - Return number of odd numbers in array of 1`;
input = [2];
expectedOutput = 0;
// act
actualOutput = oddNumbersInArray(input);

// assert 
result = assertEquals(expectedOutput, actualOutput)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// TEST 3
// arrange
testName = `TEST 3 - Return number of odd numbers in array of 6`;
input = [1, 2, 3, 4, 5, 6];
expectedOutput = 3;
// act
actualOutput = oddNumbersInArray(input);

// assert 
result = assertEquals(expectedOutput, actualOutput)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);