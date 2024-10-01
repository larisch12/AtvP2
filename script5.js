let randomNumber
let attempts = 0

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1
    attempts = 0;
    document.getElementById('message').textContent = ''
    document.getElementById('guessInput').value = ''
    document.getElementById('restartButton').style.display = 'none'
}

document.getElementById('guessButton').addEventListener('click', function() {
    const guess = Number(document.getElementById('guessInput').value)
    attempts++;

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        document.getElementById('message').textContent = 'Por favor, insira um número entre 1 e 100.'
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Muito baixo! Tente novamente.'
    } else if (guess > randomNumber) {
        document.getElementById('message').textContent = 'Muito alto! Tente novamente.'
    } else {
        document.getElementById('message').textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas!`
        document.getElementById('restartButton').style.display = 'inline'
    }
})

document.getElementById('restartButton').addEventListener('click', startGame)

window.onload = startGame

