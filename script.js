const result = document.getElementById('result');
const audio = document.getElementById('audio');

function appendToResult(value) {
    result.value += value;
    playKeySound();
}

function clearResult() {
    result.value = '';
    playKeySound();
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
    playKeySound();
}

function playKeySound() {
    audio.play();
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (
        (key >= '0' && key <= '9') ||
        key === '.' ||
        key === '/' ||
        key === '*' ||
        key === '-' ||
        key === '+' ||
        key === 'Enter' ||
        key === 'Backspace'
    ) {
        if (key === 'Enter') calculateResult();
        else if (key === 'Backspace') clearResult();
        else appendToResult(key);
    }
});
