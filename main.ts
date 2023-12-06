let guess = 0
let value = randint(1, 5)
let SecondValue = randint(1, 5)
game.splash("Answer the question!")
while (guess != value + SecondValue) {
    guess = parseInt(game.askForString("What's your guess for both values"))
}
game.splash("Correct!")
game.over(true)
