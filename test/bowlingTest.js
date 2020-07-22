const expect = require('chai').expect;
const BowlingGame = require('../bowling/bowling')

let game;

// run before each of the test cases
beforeEach(() => {
    game = new BowlingGame();
})

describe("Bowling Game", () => {
    it("should return 0 for a game of all zeros", () => {
        rollMany(0, 20)

        expect(game.score).equal(0);
    });
    it("should return 20 for a game of all ones", () => {
        rollMany(1, 20)

        expect(game.score).equal(20);
    });
    it("should return the correct score then a spare is rolled", () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(0, 17);

        expect(game.score).equal(16);
    });
    it("should return the correct score then a strike is rolled", () => {
        game.roll(10);
        game.roll(1);
        game.roll(1);
        rollMany(0, 17);

        expect(game.score).equal(14);
    });
})

function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    };
};