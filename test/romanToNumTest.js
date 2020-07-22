const assert = require('chai').assert;
const romanToNum = require('../roman_numerals/romanToNum');

describe("Convert Roman Numerals to numbers", () => {
    it("should return 1 when 'I' is passed in", () => {
        assert.equal(romanToNum("I"), 1);
    });
    it("should return 2 when 'II' is passed in", () => {
        assert.equal(romanToNum("II"), 2);
    });
    it("should return 3 when 'III' is passed in", () => {
        assert.equal(romanToNum("III"), 3);
    });
    it("should return 4 when 'IV' is passed in", () => {
        assert.equal(romanToNum("IV"), 4);
    });
    it("should return 9 when 'IX' is passed in", () => {
        assert.equal(romanToNum("IX"), 9);
    });
    it("should return 900 when 'CM' is passed in", () => {
        assert.equal(romanToNum("CM"), 900);
    });
});