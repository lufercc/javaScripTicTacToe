/**
 * Created by TTT team.
 */
var board = require('./gameBoard.js');
var player = require('./player.js');
var readlineSync = require('readline-sync');


var TTT = function(){

    this.player1 = new player();
    this.player2 = new player();
    this.winner = 'Tied game!';
    if(!process.argv[2])
    {
        this.setNamePlayer1();
        this.setNamePlayer2();
        this.initGame();
        this.gameResults();
    }


};


TTT.prototype.initGame = function(){
    console.log('The player '+this.player1+' goes first');
    board.initGrid();
    this.playerMove();
};

TTT.prototype.setNamePlayer1 = function(name){
    if(name == undefined)
    {
        name = readlineSync.question('Enter player 1 name: ');
    }
    this.player1.setPlayer1(name);
};

TTT.prototype.setNamePlayer2 = function(name){
    if(name == undefined)
    {
        name = readlineSync.question('Enter player 1 name: ');
    }
    this.player2.setPlayer1(name);
};

TTT.prototype.drawTable = function(){
    console.log(board.grid.join('\n'));
    return board.grid.join('\n');
};

TTT.prototype.playerMove = function(){
    for(var i = 0 ; i <= 9 ; i++)
    {
        if(i%2==0)
        {
            do
            {
                var move = this.player1Turn();
            }while(!move);
        }
        else
        {
            do
            {
                var move = this.player2Turn();
            }while(!move);
        }
        if(i>=5)
        {
            if(board.checkifWin('XXX'))
            {
                this.winner = this.player1.getPlayer1()+' wins!';
                break;
            }
            else if(board.checkifWin('OOO'))
            {
                this.winner = this.player2.getPlayer1()+' wins!';
                break;
            }
        }
    }
};

TTT.prototype.player1Turn = function(){
    this.drawTable();
    var position = readlineSync.question('Select a position to mark '+this.player1.getPlayer1()+': ');
    return board.setValue(position,'X');
};
TTT.prototype.player2Turn = function(){
    this.drawTable();
    var position = readlineSync.question('Select a position to mark '+this.player2.getPlayer1()+': ');
    return board.setValue(position,'O');
};

TTT.prototype.gameResults = function(){
    this.drawTable();
    console.log('The result of the game is: '+this.winner);
    return 'The result of the game is: '+this.winner;
};
var Game = new TTT;
module.exports = Game;
