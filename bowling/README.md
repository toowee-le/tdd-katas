# Bowling Game Kata

## Scoring a bowling game
Each game consists of 10 frames of 2 rolls each.
In each frame, the bowler gets up to 2 rolls to knock down all pins.
A spare, is when the bowler knocks down all the pins in 2 rolls.
    - The score for that frame is 10 plus the number of pins knocked down on the next roll.
A strike, is when the bowler knocks down all pins on the first roll of the frame.
    - The score for that frame is 10 plus the number of pins knocked down on the next 2 rolls.
If there is a spare or a strike in the last (10th) frame, the bowler gets 1 or 2 extra bonus rolls, respectively.
The game score is the total of all frame scores.

## Implementation:
[x] A `class` called Game
[ ] Methods `roll` and `score`
[ ] `roll` will be called the correct number of times for a complete game with a valid number of pins
[ ] `score` will be called at the end and should return the correct score

## Example test cases
-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0 (gutters )
1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20
5/5 3/0 -/- -/- -/- -/- -/- -/- -/- -/- = 16 (spare case)
10 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14 (strike case)
10 10 10 10 10 10 10 10 10 10 10 10 = 300
