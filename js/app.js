/*-------------------------------- Constants --------------------------------*/
const board = ['X','O','X','','','','','','']; // index of the board
const turn = 'X'    // will be the first turn
const winner = false; // when a winner is declared this will turn true
const tie = false; // if a tie happens this will turn ture
const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Top-left - bottom-right diagonal
    [2, 4, 6]  // Top-right - bottom-left diagonal
  ];
  


/*---------------------------- Variables (state) ----------------------------*/
window.addEventListener('load', function() { 
    init();
});


/*------------------------ Cached Element References ------------------------*/

const squareEl = document.querySelectorAll('.sqr'); // pulls from the .sqr 
const messageEl = document.getElementById('message');



// console.log(squareEl)
// console.log(messageEl)


/*-------------------------------- Functions --------------------------------*/
function init () {
console.log('Tic Tac Toe')
render()

}


function render(){
    updateBoard()
    updateMessage();
}

function updateBoard() {
    squareEl.forEach((squareEl, index) => { // Change squareEl[index] to squareEl
        const mark = board[index]; // Get the mark from the board array
        squareEl.textContent = mark; // Set the text content based on the value in the board array
        squareEl.className = 'sqr'; // Reset classes
        if (mark === 'X') {
            squareEl.classList.add('x-mark'); // Add class for X marks
        } else if (mark === 'O') {
            squareEl.classList.add('o-mark'); // Add class for O marks
        }
    });
}



function updateMessage() {
        if (!winner && !tie) {
            // Game is still in progress
            messageEl.textContent = `Player ${turn}'s turn`;
        } else if (!winner && tie) {
            // Game ends in a tie
            messageEl.textContent = "We have a tie";
        } else {
            // Game ends with a winner
            messageEl.textContent = `Player ${winner} is the Winner!`;
        }
        
    }

function handleClick(evt) { // Handle player click
   index.addEventListener(click, evt)
   checkForWinner()
   checkForTie()
 board === ('') 
 console.log(true)

}

function placePiece (mark, index){
    placePiece()

}

function checkForWinner (){

}

function checkForTie (){
    // console.log('check for tie')

}

function switchPlayerTurn(){
    
}
    



// /*----------------------------- Event Listeners -----------------------------*/
squareEl.forEach(square => {
    square.addEventListener('click', handleClick); // Add event listener for each square
});








//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
