const assert = require('chai').assert;
const numToRoman = require('../roman_numerals/numToRoman');

describe("Conver numbers to Roman Numerals", () => {
    it("should return I when 1 is passed in", () => {
        assert.equal(numToRoman(1), "I");
    });
    it("should return II when 2 is passed in", () => {
        assert.equal(numToRoman(2), "II");
    });
    it("should return I when 3 is passed in", () => {
        assert.equal(numToRoman(3), "III");
    });
    it("should return IV when 4 is passed in", () => {
        assert.equal(numToRoman(4), "IV");
    });
    it("should return MMXXV when 2025 is passed in", () => {
        assert.equal(numToRoman(2025), "MMXXV");
    });
    it("should return an empty string if no number is passed in", () => {
        assert.equal(numToRoman(), "");
    });
});