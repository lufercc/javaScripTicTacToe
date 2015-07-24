/**
 * Created by luiscachi on 7/24/2015.
 */

var readlineSync = require('readline-sync');

var Player = function () {
    var player1 = readlineSync.question('Enter player 1 name: ');
    var player2 = readlineSync.question('Enter player 2 name: ');
    this.player1 = player1;
    this.player2 = player2;

};

Player.prototype.setPlayer1=function(name){
    this.player1 = name;
};
Player.prototype.setPlayer2=function(name){
    this.player2 = name;
};

Player.prototype.getPlayer1=function(){
    return this.player1;
};
Player.prototype.getPlayer2=function(){
    return this.player2;
};

module.exports = Player;
