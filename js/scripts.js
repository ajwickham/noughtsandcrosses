// Back end functionality

function Game() {
  this.boards = [];
};

function Board() { 
}

let game1 = new Game;
let board = new Board
let brd = 0

Game.prototype.addBoard = function() {
  this.boards.push([]);
  this.boards[brd].push([],[],[],[],[],[],[],[],[]);
}


Game.prototype.addMark = function(square,oscore,xscore) {
  this.boards
  this.boards[brd][square-1].push(oscore,xscore);  //  boards[b-1]  = board number to array number.  
  game1.checkRowsCol(brd);                             //  brd is the array number used inside functions = b-1 
  game1.changeTurn();
}

let turn = 0
let mark = "O"
Game.prototype.changeTurn = function() {
  displayPlayer();
  turn=1-turn
  if (turn===1) {
    mark = "X";
  }
  if (turn===0) {
    mark = "O";
  }
};
 
Game.prototype.checkRowsCol = function (brd) {
    let ototal = 0
    let oaddToTotal  
    let xtotal = 0
    let xaddToTotal
    let k
    
    for (let j=0; j<3; j++) {			//columns
      ototal = 0
      xtotal = 0
      for (let i=0; i+j<9; i=i+3) {
        k=i+j;
        xaddToTotal = this.scoreSquare(brd,k,1)
        xtotal += xaddToTotal
        oaddToTotal = this.scoreSquare(brd,k,0)
        ototal += oaddToTotal
      }
      if (xtotal === 26) {
        xBoardTotal++
        alert("Winner")
      }
      if (ototal ===26) {
        oBoardTotal++
        alert("Winner")
      }
    } 
    ototal=0   
    xtotal=0
    let n=0
    for (let i=0; i<9; i++) {		//rows
      this.boards
      ototal+=(this.boards[brd][i][0]);
      xtotal+=(this.boards[brd][i][1]);
      n++
      if (n===3) {
        if (ototal === 3) {
          oBoardTotal++
          alert("Winner");
        }
        if (xtotal ===3) {
          xBoardTotal++
          alert("Winner");
        }
        ototal=0   
        xtotal=0
      }
      if (n===6) {
        if (ototal === 15) {
          oBoardTotal++
          alert("Winner");
        }
        if (xtotal ===15) {
          xBoardTotal++
          alert("Winner");
        }
        ototal=0   
        xtotal=0
      }
      if (ototal === 60) {
        oBoardTotal++
        alert("Winner");
      }
      if (xtotal === 60) {
        xBoardTotal++
        alert("Winner");
      }
    }
  };

  

  Game.prototype.checkDiagonal = function () {
  ototal=0   
  xtotal=0
  for (let i=2; i<7; i=i+2) {		          //diagonal top right to bottom left
    ototal+=(this.boards[brd][i][0]);
    xtotal+=(this.boards[brd][i][1]);
    }
    if (ototal === 26) {
      oBoardTotal++
      alert("Winner");
    }
    if (xtotal ===26) {
      xBoardTotal++
      alert("Winner");
    }    
  
  ototal=0   
  xtotal=0
  for (let i=0; i<9; i=i+4) {	        	//diagonal  top left to bottom right
    ototal+=(this.boards[brd][i][0]);
    xtotal+=(this.boards[brd][i][1]);
    }
    if (ototal === 26) {
      oBoardTotal++
      alert("Winner");
    }
    if (xtotal ===26) {
      xBoardTotal++
      alert("Winner");
    }  
  };
    
  Game.prototype.scoreSquare = function (brd,k,z) {  //subfunction that finds the number                         
    let x                                            //of x or o in a square
    let y 
    x = isNaN(this.boards[brd][k][z]);
    if (x == false) {
      y = this.boards[brd][k][z]
    }
    else {
      y = 0
    }
  return y;  
  };  

  
game1.addBoard();  //adding first board


//Front end logic

let xBoardTotal = 0
let oBoardTotal = 0

resetboard = function () {
  document.getElementById("pOne").innerHTML = "";
  document.getElementById("pTwo").innerHTML = "";
  document.getElementById("pThree").innerHTML = "";
  document.getElementById("pFour").innerHTML = "";
  document.getElementById("pFive").innerHTML = "";
  document.getElementById("pSix").innerHTML = "";
  document.getElementById("pSeven").innerHTML = "";
  document.getElementById("pEight").innerHTML = "";
  document.getElementById("pNine").innerHTML = "";
  document.getElementById("xscore").innerHTML = "";
  document.getElementById("oscore").innerHTML = "";
  document.getElementById("xscore").innerHTML = xBoardTotal;
  document.getElementById("oscore").innerHTML = oBoardTotal;
  ototal=0   
  xtotal=0
  brd = brd+1
  game1.addBoard();
}; 

displayPlayer = function () {
  document.getElementById("go").innerHTML = mark
}

$(document).ready(function() {

  $("#reset").click(function () {   
    resetboard();
  }); 

  $("#one").click(function () {   
    game1.addMark(1,1*turn,1*(1-turn));
    document.getElementById("pOne").innerHTML = mark;
    game1.checkDiagonal();
  });

  $("#two").click(function () {   
    game1.addMark(2,1*turn,1*(1-turn));
    document.getElementById("pTwo").innerHTML = mark;
  });

  $("#three").click(function () {   
    game1.addMark(3,1*turn,1*(1-turn));
    document.getElementById("pThree").innerHTML = mark;
    game1.checkDiagonal();
  });

  $("#four").click(function () {   
    game1.addMark(4,5*turn,5*(1-turn));
    document.getElementById("pFour").innerHTML = mark;
  });

  $("#five").click(function () {   
    game1.addMark(5,5*turn,5*(1-turn));
    document.getElementById("pFive").innerHTML = mark;
    game1.checkDiagonal();
  });

  $("#six").click(function () {   
    game1.addMark(6,5*turn,5*(1-turn));
    document.getElementById("pSix").innerHTML = mark;
  });

  $("#seven").click(function () {   
    game1.addMark(7,20*turn,20*(1-turn));
    document.getElementById("pSeven").innerHTML = mark;
    game1.checkDiagonal();
  });

  $("#eight").click(function () {   
    game1.addMark(8,20*turn,20*(1-turn));
    document.getElementById("pEight").innerHTML = mark;
  });

  $("#nine").click(function () {   
    game1.addMark(9,20*turn,20*(1-turn));
    document.getElementById("pNine").innerHTML = mark;
    game1.checkDiagonal();
  });
});