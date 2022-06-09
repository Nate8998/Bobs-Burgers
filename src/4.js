const findHighestInArray = inputArray => {
   let highest = Number.NEGATIVE_INFINITY;

   Se logic to find the highest number in inputArray
   for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > highest) {
         highest = inputArray[i];
      }
   }

   return highest;


   const oddNumbersInArray = inputArray => {
      let numberOfOdds = 0;
    gic to work out number of odds in array
    op through array
      or(let i = 0; i < inputArray.length; i++) {
         // check if element is odd number - if it is odd, add 1 numberOfOdds
         if (inputArray[i] % 2 !== 0) {
            numberOfOdds++;
         }
      }

      return numberOfOdds;
   };

   module.exports = {
      findHighestInArray,
      oddNumbersInArray
   }

 Arrow functions

   const implicitReturn1 = () => `Implicit return - no brackets or anything`;
   const implicitReturn2 = () => (`Implicit return with parentheses`);
   const explicitReturn = () => {
    Other code could be here
      return `Requires return keyword with curly bra