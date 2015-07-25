/**
 * Created by luiscachi on 7/24/2015.
 */

var readlineSync = require('readline-sync');

var Player = function (name) {
    //var player2 = readlineSync.question('Enter player 2 name: ');
    this.player1 = name;


};

Player.prototype.setPlayer1=function(name){
    this.player1 = name;
};

Player.prototype.getPlayer1=function(){
    return this.player1;
};

module.exports = Player;
