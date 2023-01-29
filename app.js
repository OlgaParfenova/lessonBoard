const $board = document.querySelector('#board');
const COLORS = ['#F8A40E', '#F7C356', '#148177', '#32C6EA', '#103CDB', '#59007C', '#E32130', '#BC146C', '#F608F5', '#841B30', '#F0574F', '#E6D279',];
const SQUARES_NUMBER = 1000;

const squares = '<div class="square"></div>'.repeat(SQUARES_NUMBER);
$board.innerHTML = squares;

$board.addEventListener('mouseover', (event) => {
    const square = event.target;
    if (!square.classList.contains('square')) return;
    setColor(square);
});

$board.addEventListener('mouseout', (event) => {
    const square = event.target;
    if (!square.classList.contains('square')) return;
    removeColor(square);
});

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow  = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow  = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
}

