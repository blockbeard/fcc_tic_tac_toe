/**
 * Created by chris_000 on 16/07/2016.
 */
// build a tic tac toe game
//TODO I can play a game of tic tac toe with the computer
//TODO MY game resets when it is over so I can play again
//TODO I can choose whether to play as X or O

// the main game function. Choice is X or O from an onclick event to start.
function letsPlayAGame(choice) {
    var compMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        humanMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        topRow = free,
        midRow = free,
        botRow = free,
        leftCol = free,
        midCol = free,
        rightCol = free,
        rightDiag = free,
        leftDiag = free;

    //take input of player move from onclick event, square is the index that corresponds to the square player clicks
    function humanInput(square) {
        //make sure it is a legal move and execute it
        if (compMoves[square] === 0 && humanMoves[square] === 0){
            humanMoves[square] = 1;
        }
        //TODO print player move to square
        checkWin(humanMoves);
    }

    //calculate computer's move based on available squares and execute it
    function compMove() {

    }
    // check whether player has won
    function checkWin(movesArray){
        switch(movesArray){
            case [1,1,1,0,0,0,0,0,0]
        }
    }
}

// reset the game on winning. Reload page? Reload just the game window?
function resetGame() {

}

