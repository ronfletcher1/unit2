// =========GLOBALS=======
// init game as player 1's turn
let whosTurn = 1;
//  Make an array for both players. and push each new square
// onto the appropriate array
let player1Squares = [];
let player2Squares = [];
// Array of all winning combos
const winningCombos = [
    ['A1','B1','C1'], //row 1
    ['A2','B2','C2'], //row 2
    ['A3','B3','C3'], //row 3
    ['A1','A2','A3'], //Col 1
    ['B1','B2','B3'], //Col 2
    ['C1','C2','C3'], //Col 3
    ['A1','B2','C3'], //Diag 1
    ['A3','B2','C1'], //Diag 2
 ]
let gameOn = true;



// console.log(this); // window

// console.log("sanity check")

// 1. Set up Board ---CHECK!
// 2. User should be able to click on a button
// When the click hhappens, the square should have
// that players mark (Xor O)
// 3. If it's X's turn, put an X in, otherwise , put an O in
// 4. In order to accomplish 3, we need to keep thack of who's tirn it is
// After X goes, it becomes O's turn and vie-versa
// 5. Keep other player from taking a square
// 6. See if someone won!  If so, congratulate them
// 7. Stop the game if someone won, otherwise let it keep going

// squares is an array with 9 objects in it
// Each element is an HTNL button element
const squares = document.getElementsByClassName('square');
// const squares = document.getElementsByTagName('button');
// console.log(squares)

for(let i = 0; i < squares.length; i++){
    // console.log(squares[i]);
    // now that we have all the squares individually (squares[i]),
    // we can add an event listener to each one
    // to add eventlistener:
    // 1. What to listen to
    // 2. add the method (addEventListener)
    // 3. first arg: what event to listen for
    // 4. second arg: function to run if that event happens
    squares[i].addEventListener("click", function(event){
        // Every JS event, will give you the event object
        // console.log(event)
        console.dir(this);  // console.log(event)
        if (gameOn){
        // Check to see if the square is taken...
            if(this.innerHTML === "-"){ 
                // it's not taken, so see whos turn ti is
                if(whosTurn === 1){
                    // its player 1, put an XX, and give
                    // control to O
                    this.innerHTML = "XX"; // Update the DOM
                    whosTurn = 2; // Update JS
                    // Update the DOM
                    document.getElementById('message').innerHTML= "It's OO's turn"
                    player1Squares.push(this.id)
                    checkWin(player1Squares, 1)
                }else{
                    this.innerHTML = "OO";
                    whosTurn = 1;
                    document.getElementById('message').innerHTML = "It's XX's turn"
                    player2Squares.push(this.id)
                    checkWin(player2Squares, 2)
                }     
            }else{
                document.getElementById('message').innerHTML = "Uh, taken...pick another square"
            }
        console.log(player1Squares)
        console.log(player2Squares)  
        }
    })
}

function checkWin(playerSquares, whoMarked){
    console.log("Checking to see who won...")
    // console.log(playerSquares);
    // console.log(whoMarked)
    // we know who just went (whoMarked)
    // and we know what squares they have (playerSquares)
    // Outer Loop - Check each winning combination
    for(let i = 0; i < winningCombos.length; i++){
        // keep track of how many squares in THIS combo
        let squareCount = 0
        // Inner Loop - Check each square inside of THIS winning combo
        // winningCombos[i] = the winningCombo we are on (3 squares)
        for(let j = 0; j < winningCombos[i].length; j++){
            // winningCombos[i][j] = the square in the winningCombo we are on
            const winningSquare = winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                // player has this square!!!
                squareCount++;
            }
        }
        if(squareCount === 3){
            // console.log("Player won");
            // console.log(winningCombos[i]);
            endGame(winningCombos[i], whoMarked)
        }
    }
}

function endGame(winningCombo, whoWon){
    gameOn = false;
    // if we get to endGame... WINNER WINNER, CHICKEN DINNER
    // so the game is over
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}`
    // we know which squares are the qinning squares
    for(let i = 0; i < winningCombo.length; i++){
        let winningSquare = winningCombo[i];
        let squareElem = document.getElementById(winningSquare);
        console.log(squareElem)
        squareElem.className += " winning-square"
    }
}

function reset(){
    // 1. get rid of XX's and OO's
    for(let i = 0; i < squares.length; i++){
        squares[i].innerHTML = "-"
        squares[i].className = "square"
    }
    // 2. remove winning class
    // 3. reset the message player 
    document.getElementById('message').innerHTML = ""
    // 4. reset playerSquares array
    player1Squares = [];
    player2Squares = [];
    // 5. Set whosTurn
    whosTurn = 1;
    // 6. reset gameOn to true
    gameOn = true;
}


// var score = 0
// if (whoWon == play)

// for(let i = 0; i < score; i++){

// }
