/**
 * Created by chris_000 on 16/07/2016.
 */
// build a tic tac toe game
//TODO I can play a game of tic tac toe with the computer

var playerChoice,
    compChoice,
    compMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    humanMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    winBackground = "red";
// the main game function. Choice is X or O from an onclick event to start.
function chooseYourWeapon(selected) {
    if (selected == "X") {
        playerChoice = "X";
        compChoice = "O";
    } else {
        playerChoice = "O";
        compChoice = "X";
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

function compInput(square) {
    console.log(square);
    //make sure it is a legal move and execute it
    if (compMoves[square] === 0 && humanMoves[square] === 0) {
        compMoves[square] = 1;
        var thisSquare = "square " + square;
        document.getElementById(thisSquare).innerHTML = compChoice;
        checkWin(compMoves);
    } else {
        console.log("computer made illegal move");
    }
}

//calculate computer's move based on available squares and execute it
function compMove() {

    var potentialMovesArr = [];

        evaluateRow(0, 1, 2);
        evaluateRow(3, 4, 5);
        evaluateRow(6, 7, 8);
        evaluateRow(0, 3, 6);
        evaluateRow(1, 4, 7);
        evaluateRow(2, 5, 8);
        evaluateRow(0, 4, 8);
        evaluateRow(2, 4, 6);

    console.log("potential moves = " + potentialMovesArr);
    function steamrollArray(arr) {
        // I'm a steamroller, baby
        var newArr = [];

        function flatten(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i]) === true) {
                    flatten(arr[i]);
                } else {
                    newArr.push(arr[i]);
                }
            }

        }

        flatten(arr);
        return newArr;
    }

    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (b[0] < a[0]) ? -1 : 1;
        }
    }

    function evaluateRow(first, second, third) {
        var arrayToEval = [[humanMoves[first], humanMoves[second],  humanMoves[third]], [compMoves[first], compMoves[second], compMoves[third]]],
            evaluated = [arrayToEval[0].reduce(add, 0), arrayToEval[1].reduce(add, 0)],
            humanSquares = [humanMoves[first], humanMoves[second], humanMoves[third]],
            compSquares = [compMoves[first], compMoves[second], compMoves[third]],
            moveIndex;
        console.log("evaluate row fired");
        console.log("array to eval = " + arrayToEval);
        console.log("evaluated = " + evaluated);
        console.log("compSquares = " + compSquares + " humanSquares = " + humanSquares);
        function add(a, b) {
            return a + b;
        }

        if (evaluated[0] === 0 && evaluated[1] === 2) {
            moveIndex = arrayToEval[1].indexOf(0);
            potentialMovesArr.push([5, compSquares[moveIndex]]);
            console.log("if for [0, 2] fired pushing" + [5, compSquares[moveIndex]]);
        }
        else if (evaluated[0] === 2 && evaluated[1] === 0) {
            moveIndex = arrayToEval[0].indexOf(0);
            potentialMovesArr.push([4, humanSquares[moveIndex]]);
            console.log("if for [2, 0] fired pushing" + [4, humanSquares[moveIndex]]);
        }
        else if (evaluated[0] === 0 && evaluated[1] === 1) {
            moveIndex = [[arrayToEval[1].indexOf(0)], [3, arrayToEval[1].lastIndexOf(0)]];
            potentialMovesArr.push([3, compSquares[moveIndex][0]], [3, compSquares[moveIndex][1]]);
            console.log("if for [0, 1] fired pushing" + [3, compSquares[moveIndex][0]], [3, compSquares[moveIndex][1]]);
        }
        else if (evaluated[0] === 0 && evaluated[1] === 0) {
            potentialMovesArr.push([2, second]);
            console.log("if for [0, 0] fired pushing" + [2, second]);
        }
        else if (evaluated[0] === 1 && evaluated[1] === 0) {
            console.log("1,0 fired");
            moveIndex = [arrayToEval[0].indexOf(0)], arrayToEval[0].lastIndexOf(0)];
            console.log("moveIndex = " + moveIndex);
            console.log("move index 0 = " + moveIndex[0] + "move index 1 = " + moveIndex[1]);
           // potentialMovesArr.push([1, compSquares[moveIndex][0], [1, compSquares[moveIndex][1]]]);
            console.log("compSquares[moveIndex][0] = " + compSquares[moveIndex][0]);
            console.log("if for [1, 0] fired pushing" + [1, compSquares.moveIndex[0]]);
        }
        else if (evaluated[0] === 1 && evaluated[1] === 1) {
            moveIndex = arrayToEval[1].indexOf(0);
            potentialMovesArr.push([0, compSquares[moveIndex]]);
            console.log("if for [1, 1] fired pushing" + [0, compSquares[moveIndex]]);
        }
        else{
            console.log("no ifs fired");
        }



    }

    potentialMovesArr = potentialMovesArr.sort(sortFunction);
    console.log("sorted potential moves = " + potentialMovesArr);
    compInput(potentialMovesArr[0][1]);

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
    function reload() {
        location.reload()
    }

    setTimeout(reload, 1000);
}
