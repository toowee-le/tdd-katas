class BowlingGame {
    constructor() {
        // create a rolls array
        this.rolls = [];
    } 
    // keep a tally of the pins knocked down
    roll(pins) {
        this.rolls.push(pins);
    }

    // implement the score as a getter
    get score() {
        let score = 0;
        let rollIndex = 0;

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            // check for a strike
            if (this.isStrike(rollIndex)) {
                score += this.isStrikeBonus(rollIndex);
                rollIndex++;
                // skip the rest of the logic and go to the next frame
                continue;
            }

            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

            if (this.isSpare(frameScore)) {
                // spare logic
                score += this.spareBonus(rollIndex);
            } else {
                // regular frame logic
                score += frameScore;
            }

            rollIndex += 2;
        }
        return score;
    }

    isStrikeBonus(rollIndex) {
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    isSpare(frameScore) {
        return frameScore === 10;
    }

    spareBonus(rollIndex) {
        return 10 + this.rolls[rollIndex + 2];
    }
}

module.exports = BowlingGame;