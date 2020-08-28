// Back end functionality

function Game() {
  this.boards = [];
}

let game1 = new Game;
let boards1 = [];
let boards2 = [];

let t=0
let turn = "X"

Game.prototype.addBoards = function(board) {
  board.push([],[],[],[],[],[],[],[],[]);
  this.boards.push(board);
}

Game.prototype.addMark = function(b,square,mark,score) {
  debugger
  this.boards[(b-1)][square-1].push(mark,score);  //  boards[b-1]  = board number.  
  game1.checkRowsCol(b);
  game1.changeTurn();
}

Game.prototype.changeTurn = function() {
  debugger
  t=1-t
  if (t=1) {
    turn = "X";
  }
  if (t=0) {
    turn = "O";
  }
};
 
Game.prototype.checkRowsCol = function (b) {
    let total = 0
    let addToTotal
    let k
    for (let j=0; j<3; j++) {			//columns
      total = 0
      for (let i=0; i+j<9; i=i+3) {
        k=i+j;
        addToTotal = this.scoreSquare(b,k)
        total += addToTotal
      }
      if (total === 26) {
        alert("Winner")
      }
    }
    total=0
    let n=0
    for (let i=0; i<9; i++) {		//rows
      total+=(this.boards[0][i][1]);
      n++
      if (n===3) {
        if (total === 3) {
          alert("Winner");
        }
        total = 0;
      }
      if (n===6) {
        if (total === 15) {
          alert("Winner");
        }
        total = 0;
      }
      if (total === 60) {
        alert("Winner");
      }
    }
  };

  

  Game.prototype.checkDiagonal = function () {
  debugger
  total = 0
  for (let i=2; i<7; i=i+2) {		//diagonal
    total+=(boards1[(i)][1]);
    }
  if (total === 26) {
      alert("Winner")
    }
  total=0
  for (let i=0; i<9; i=i+4) {		//diagonal
    total+=(boards1[(i)][1]);
    }
  if (total === 26) {
      alert("Winner")
    }
  };
    
  Game.prototype.scoreSquare = function (b,k) {
    debugger
    let x
    let y 
    x = isNaN(this.boards[(b-1)][(k)][1]);
    if (x == false) {
      y = this.boards[(b-1)][(k)][1]
    }
    else {
      y = 0
    }
  return y;  
  };  

  

game1.addBoards(boards1);
game1.addBoards(boards2);

//game1.addMark(1,5,"X");
//game1.checkRowOf3(boards1);




//Front end functionality



$(document).ready(function() {
 
  
  $("#one").click(function () {   
    game1.addMark(1,1,turn,1);
    document.getElementById("pOne").innerHTML = turn;
    game1.checkDiagonal();
  });

  $("#two").click(function () {   
    game1.addMark(1,2,turn,1);
    document.getElementById("pTwo").innerHTML = turn;
  });

  $("#three").click(function () {   
    game1.addMark(1,3,turn,1);
    document.getElementById("pThree").innerHTML = turn;
    game1.checkDiagonal();
  });

  $("#four").click(function () {   
    game1.addMark(1,4,turn,5);
    document.getElementById("pFour").innerHTML = turn;
  });

  $("#five").click(function () {   
    game1.addMark(1,5,turn,5);
    document.getElementById("pFive").innerHTML = turn;
    game1.checkDiagonal();
  });

  $("#six").click(function () {   
    game1.addMark(1,6,turn,5);
    document.getElementById("pSix").innerHTML = turn;
  });

  $("#seven").click(function () {   
    game1.addMark(1,7,turn,20);
    document.getElementById("pSeven").innerHTML = turn;
    game1.checkDiagonal();
  });

  $("#eight").click(function () {   
    game1.addMark(1,8,turn,20);
    document.getElementById("pEight").innerHTML = turn;
  });

  $("#nine").click(function () {   
    game1.addMark(1,9,turn,20);
    document.getElementById("pNine").innerHTML = turn;
    game1.checkDiagonal();
  });
});