/**
 * Created by chris_000 on 16/07/2016.
 */
// build a tic tac toe game
//TODO I can play a game of tic tac toe with the computer
//TODO MY game resets when it is over so I can play again
//TODO I can choose whether to play as X or O

var playerChoice,
    compChoice,
    compMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    humanMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    winBackground = "red";
// the main game function. Choice is X or O from an onclick event to start.
function chooseYourWeapon(selected) {
    if(selected == "X"){
        playerChoice = "X";
        compChoice = "O";
        console.log(selected);
        console.log(playerChoice);
        console.log(compChoice);

    }else{
        playerChoice = "O";
        compChoice = "X";
        console.log(selected);
        console.log(playerChoice);
        console.log(compChoice);

    }
}

//take input of player move from onclick event, square is the index that corresponds to the square player clicks
function humanInput(square) {
    //make sure it is a legal move and execute it
    if (compMoves[square] === 0 && humanMoves[square] === 0) {
        humanMoves[square] = 1;
        var thisSquare = "square " + square;
        document.getElementById(thisSquare).innerHTML = playerChoice;
        checkWin(humanMoves);
        compMove();

    }
}

function compInput(square){
    //make sure it is a legal move and execute it
    if (compMoves[square] === 0 && humanMoves[square] === 0) {
        compMoves[square] = 1;
        var thisSquare = "square " + square;
        document.getElementById(thisSquare).innerHTML = compChoice;
        checkWin(compMoves);
    }else{
        console.log("computer made illegal move");
    }
}

//calculate computer's move based on available squares and execute it
function compMove() {
    if (humanMoves[4] === 0 && compMoves[4] === 0){
        compInput(4);
    }

}

function evaluateRow(first, second, third){
    var arrayToEval = [[humanMoves[first], humanMoves[second], humanMoves[third]], [compMoves[first], compMoves[secons], compMoves[third]]],
        evaluated = [arrayToEval[0].reduce(add, 0), arrayToEval[1].reduce(add, 0)];

    function add(a, b){
        return a + b;
    }

    if (evaluated === [0, 2]){
        return [3, arrayToEval[1].indexOf(0)];
    }
    else if (evaluated === [2, 0]){
        return [2, arrayToEval[0].indexOf(0)];
    }


}

// check whether player has won
function checkWin(movesArray) {
    if (movesArray[0] === 1 && movesArray[1] === 1 && movesArray[2] === 1) {
        document.getElementById("square 0").style.backgroundColor = winBackground;
        document.getElementById("square 1").style.backgroundColor = winBackground;
        document.getElementById("square 2").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[3] === 1 && movesArray[4] === 1 && movesArray[5] === 1) {
        document.getElementById("square 3").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 5").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[6] === 1 && movesArray[7] === 1 && movesArray[8] === 1) {
        document.getElementById("square 6").style.backgroundColor = winBackground;
        document.getElementById("square 7").style.backgroundColor = winBackground;
        document.getElementById("square 8").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[0] === 1 && movesArray[3] === 1 && movesArray[6] === 1) {
        document.getElementById("square 0").style.backgroundColor = winBackground;
        document.getElementById("square 3").style.backgroundColor = winBackground;
        document.getElementById("square 6").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[1] === 1 && movesArray[4] === 1 && movesArray[7] === 1) {
        document.getElementById("square 1").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 7").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[2] === 1 && movesArray[5] === 1 && movesArray[8] === 1) {
        document.getElementById("square 2").style.backgroundColor = winBackground;
        document.getElementById("square 5").style.backgroundColor = winBackground;
        document.getElementById("square 8").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[0] === 1 && movesArray[4] === 1 && movesArray[8] === 1) {
        document.getElementById("square 0").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 8").style.backgroundColor = winBackground;
        resetGame();
    }
    else if (movesArray[2] === 1 && movesArray[4] === 1 && movesArray[6] === 1) {
        document.getElementById("square 2").style.backgroundColor = winBackground;
        document.getElementById("square 4").style.backgroundColor = winBackground;
        document.getElementById("square 6").style.backgroundColor = winBackground;
        resetGame();
    } else {
        return false;
    }
}

// reset the game on winning. Reload page? Reload just the game window?
function resetGame() {
    function reload(){
        location.reload()
    }
    setTimeout(reload, 1000);
}
