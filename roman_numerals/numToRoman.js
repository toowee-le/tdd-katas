/**
 * @param {number} num - number range between 1 and 3000
 * @return {string} - Roman numeral
 */

const numToRoman = (num) => {
    let romanised = "";

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            romanised += key;
            num -= romanNumerals[key];
        }
    }

    return romanised;
}

// Place hash outside the function so it doesn't get called each time the function runs
const romanNumerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
}

module.exports = numToRoman;