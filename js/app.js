/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


/*---------------------------- Variables (state) ----------------------------*/
let board 
let turn
let winner 
let tie 


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
console.log(squareEls)
console.dir(squareEls)



const messageEl = document.querySelector('#message')
console.log(messageEl)

init()

/*-------------------------------- Functions --------------------------------*/
function init() {
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = 'false'
    tie = 'false'

    render()
    console.log()
}


function updateBoard() {
    board.forEach((square, index) => {
       squareEls[index]
       if (board[index]==='X') {
        squareEls[index].style.backgroundColor = 'red'
       } else if (board[index] === 'O') {
        squareEls[index].style.backgroundColor = 'blue'
       } else {
            squareEls[index].style.backgroundColor = 'grey'
        }
    
        console.log(2)
    })
}
;
function render


function updateMessage() {
    if (winner === false && tie === false && turn === 'X')
        return 'Player Os turn';
    if (winner === false && tie === false && turn === 'O')
        return 'Player Xs turn';
    if (winner === false && tie === true)
        return 'Tie';
    if (winner === true && tie === false && turn === 'X')
        return 'Player X wins';
}

console.log(squareEls[1].textContent)


function handleClick(event) {
    let squareIndex = event.target.id
    if (board[squareindex] === 'X' || board[squareIndex] === 'O')
        return

    if(winner === true)
        return
}

function placePiece() {
    console.log()
    board[squareIndex] = turn
}


/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach(squareEl => {
    squareEl.addEventListener('click', handleClick);
})
