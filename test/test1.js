//Arrange
testName = 'test 1 - add item';
input = [items];
expectedOutput = 1;

//act
actualOutput = addItems(input);

//Assert
result = assertEquals(expectedOutput, actualOutput)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`)