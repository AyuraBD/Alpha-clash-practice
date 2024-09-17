
// Add a class to an element
function addClassElement (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// Remove a class from an element
function removeClassElement (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// Set background of key of keyboard
function setBgColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// Remove background from key of keyboard
function removeBgColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// Get value by id
function getElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// Set the updated value
function setTextElementById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// Get random alphabet
function getRandomAlphabet (){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaSplit = alphabet.split('');

    const randomNumber = Math.random() * 25;
    const random = Math.round(randomNumber);

    const currentAlpha = alphaSplit[random];
    return currentAlpha;
}



