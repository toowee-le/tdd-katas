/**
 * @param {string} s - Roman Numeral
 * @return {number}
 * @description: edge cases: how to handle comparing the last value in the string
 */

const numerals = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
}

 const romanToNum = (s) => {
    let result = 0;

    // loop through the Roman numeral
    for (let i = 0; i < s.length; i++) {
        let currentNumber = numerals[s[i]];
        let nextNumber = numerals[s[i + 1]];

        // if the current value is smaller than the next value then we know we need to subtract this number
        if (currentNumber < nextNumber) {
            result -= currentNumber;
        } else {
            result += currentNumber;
        }
    }
    
    return result;
 }

 module.exports = romanToNum;