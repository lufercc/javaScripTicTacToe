/**
 * Created by TTT team.
 */
var board = require('./gameBoard.js');
var player = require('./player.js');
var readlineSync = require('readline-sync');


var TTT = function(){

    this.player1 = '';
    this.player2 = '';
    this.winner = 'Tied game!';
    //this.initGame();
    //this.gameResults();

};


/*TTT.prototype.getdata = function(){
    this.name = readlineSync.question('Enter the Name of player1? :');
    console.log(name);
    this.player1 = new player(readlineSync.question('Enter the Name of player1? :'));
    console.log('name the payer ',player1.getName());
};*/


TTT.prototype.initGame = function(){
    console.log('The player '+this.player1+' goes first');
    board.initGrid();
    this.playerMove();
};

TTT.prototype.setNamePlayer1 = function(name){
    var p = new player();
    p.setPlayer1(name)
    this.player1 = p.getPlayer1();
};

TTT.prototype.setNamePlayer2 = function(name){
    var p = new player();
    p.setPlayer2(name)
    this.player2 = p.getPlayer2();
};

TTT.prototype.drawTable = function(){
    console.log(board.grid.join('\n'));
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
                this.winner = this.player1+' wins!';
                break;
            }
            else if(board.checkifWin('OOO'))
            {
                this.winner = this.player2+' wins!';
                break;
            }
        }
    }
};

TTT.prototype.player1Turn = function(){
    this.drawTable();
    var position = readlineSync.question('Select a position to mark '+this.player1+': ');
    return board.setValue(position,'X');
};
TTT.prototype.player2Turn = function(){
    this.drawTable();
    var position = readlineSync.question('Select a position to mark '+this.player2+': ');
    return board.setValue(position,'O');
};

TTT.prototype.gameResults = function(){
    this.drawTable();
    console.log('The result of the game is: '+this.winner);
    return 'The result of the game is: '+this.winner;
};
var Game = TTT;
module.exports = Game;
