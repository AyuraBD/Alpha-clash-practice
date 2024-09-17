
function handleKeyboardPress (event){
    const playerPressed = event.key;

    // Stop the game if you press the 'ESC' button
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alpha');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // Check matched or not
    if (playerPressed === expectedAlphabet){
        // Update score
        
        // 1. Get the current score
        const currentScore = getElementValueById('score');
        // 2.  Increase the score by 1
        const updatedScore = currentScore + 1;
        // 3. Show the updated score
        setTextElementById('score', updatedScore);

        removeBgColor(expectedAlphabet);
        continueGame();
    } else{
        // Get the current life
        const currentLife = getElementValueById('life');
        // Reduce the life
        const updatedLife = currentLife - 1;
        // update the life
        setTextElementById('life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }

}

// Captured keyboard key press
document.addEventListener('keyup', handleKeyboardPress );

function continueGame (){
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById('current-alpha');
    currentAlphabet.innerText = alphabet;
    setBgColor(alphabet);
}

function play(){
    // Hide everything, show only the play ground
    addClassElement('home');
    removeClassElement('play-ground');
    addClassElement('final-score');
    
    // Reset score and life value
    setTextElementById('score', 0);
    setTextElementById('life', 5);

    continueGame();
}

function gameOver (){
    addClassElement('play-ground');
    removeClassElement('final-score');

    // Update the last score
    const lastScore = getElementValueById ('score');
    setTextElementById('last-score', lastScore);

    // Clear the last selected alphabet
    const currentAlpha = getElementTextById('current-alpha');
    removeBgColor(currentAlpha);
}




